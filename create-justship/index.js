#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { dist, mkdirp } from "./utils.js";
import ignore from "ignore";

/** @type {import('./types/index.js').create} */
export async function createJustShip(cwd, options) {
  writeTemplateFiles(cwd, "base");
}

/**
 * Write template files to the specified directory.
 * @param {string} cwd
 * * @param {string} template
 */
export function writeTemplateFiles(cwd, template) {
  const templateDir = path.resolve(dist(`templates/${template}`));
  const targetDir = path.resolve(cwd);
  const ig = loadIgnoreConfig(templateDir);

  copyTemplate(templateDir, targetDir, ig, cwd);
}

/**
 * Remove the +page.svelte file at the given route directory.
 * @param {string} cwd - The current working directory to start from.
 */
export function removePageSvelte(cwd) {
  // Construct the full path to the +page.svelte file
  const fullPath = path.resolve(cwd, "src", "routes", "+page.svelte");

  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  } else {
    console.error(`File ${fullPath} does not exist.`);
  }
}

/**
 * Construct the .env file content from a JSON structure and write it to a file.
 * @param {object} jsonConfig - The JSON configuration object.
 * @param {string[]} sectionsToInclude - The sections of the JSON that should be included in the .env file.
 * @param {string} cwd - The current working directory to start from.
 * @param {string} projectName - The name of the project
 */
export function constructAndWriteEnvFile(
  jsonConfig,
  sectionsToInclude,
  cwd,
  projectName
) {
  let envContent = "";

  // Helper function to process private sections
  function processPrivateSection(section) {
    let privateContent = "";
    for (let [key, value] of Object.entries(section)) {
      if (value && typeof value === "object") {
        privateContent += `# ${key}\n`;
        for (let [envVar, envValue] of Object.entries(value)) {
          privateContent += `${envVar}=${envValue === null ? "" : envValue}\n`;
        }
        privateContent += "\n"; // add spacing after each private section
      }
    }
    return privateContent;
  }

  let privateContent = "";

  sectionsToInclude.forEach((section) => {
    if (jsonConfig[section]) {
      if (jsonConfig[section].private) {
        privateContent += processPrivateSection(jsonConfig[section].private);
      }

      if (jsonConfig[section].public) {
        envContent += "# Public variables\n";
        for (let [key, value] of Object.entries(jsonConfig[section].public)) {
          // Set the value to cwd if the key is PUBLIC_PROJECT_NAME
          if (key === "PUBLIC_PROJECT_NAME") {
            value = projectName;
          }
          envContent += `${key}=${value === null ? "" : value}\n`;
        }
        envContent += "\n"; // add spacing after public section
      }
    }
  });

  if (privateContent) {
    envContent =
      "# Private server-side variables\n" + privateContent + "\n" + envContent;
  }

  // Write the content to the .env file in the given cwd
  const envFilePath = path.join(cwd, ".env");
  fs.writeFileSync(envFilePath, envContent.trim(), "utf8");
}

/**
 * Load the .gitignore configuration.
 * @param {string} templateDir
 * @returns {ignore.Ignore}
 */
function loadIgnoreConfig(templateDir) {
  const gitignorePath = path.join(templateDir, ".gitignore");
  const ig = ignore.default({ allowRelativePaths: true });

  if (fs.existsSync(gitignorePath)) {
    const gitignoreContent = fs.readFileSync(gitignorePath, "utf8");
    ig.add(gitignoreContent);
  }

  return ig;
}

/**
 * Copy files from source to destination, respecting .gitignore rules.
 * @param {string} srcDir
 * @param {string} destDir
 * @param {ignore.Ignore | undefined} ig
 * @param {string} projectName
 */
function copyTemplate(srcDir, destDir, ig, projectName) {
  ensureDirectoryExists(destDir);

  const items = fs.readdirSync(srcDir);

  items.forEach((item) => {
    const srcPath = path.join(srcDir, item);
    let destPath = path.join(destDir, item);
    const relativePath = path.relative(destPath, srcPath);

    // Special handling for .gitignore to ensure it gets copied
    if (item === ".gitignore") {
      const content = fs.readFileSync(srcPath, "utf8");
      fs.writeFileSync(destPath, content, "utf8");
      return;
    }

    if (ig?.ignores(relativePath)) {
      return;
    }

    if (fs.statSync(srcPath).isDirectory()) {
      copyTemplate(srcPath, destPath, ig, projectName);
    } else {
      if (item === ".env.example") {
        destPath = path.join(destDir, ".env");
      }
      if (item === "package.json") {
        let srcContent = fs.readFileSync(srcPath);
        let srcPkg = JSON.parse(srcContent.toString());

        if (fs.existsSync(destPath)) {
          let destContent = fs.readFileSync(destPath);
          let destPkg = JSON.parse(destContent.toString());

          // Merge source package.json into destination package.json
          merge(destPkg, srcPkg);

          // Write merged package.json back to destination
          fs.writeFileSync(
            destPath,
            JSON.stringify(destPkg, null, 2).replace(
              /~TODO-NAME~/g,
              projectName
            ),
            "utf8"
          );
        } else {
          fs.writeFileSync(
            destPath,
            JSON.stringify(srcPkg, null, 2).replace(
              /~TODO-NAME~/g,
              projectName
            ),
            "utf8"
          );
        }
      } else {
        let content = fs.readFileSync(srcPath);
        let contentStr = content.toString();
        contentStr = contentStr.replace(/~TODO-NAME~/g, projectName);
        fs.writeFileSync(destPath, contentStr, "utf8");
      }
    }
  });
}

/**
 * Ensure the directory exists.
 * @param {string} dir
 */
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// /**
//  * Add the chosen payment provider to the project.
//  * @param {string} cwd
//  * @param {string} paymentProvider
//  */
// function addPaymentProvider(cwd, paymentProvider) {
//   if (paymentProvider === "none") {
//     return;
//   } else if (paymentProvider === "stripe") {
//     writeTemplateFiles(cwd, "stripe");
//   }
// }

/**
 * @param {any} target
 * @param {any} source
 */
function merge(target, source) {
  for (const key in source) {
    if (key in target) {
      const target_value = target[key];
      const source_value = source[key];

      if (
        typeof source_value !== typeof target_value ||
        Array.isArray(source_value) !== Array.isArray(target_value)
      ) {
        throw new Error("Mismatched values");
      }

      if (typeof source_value === "object") {
        merge(target_value, source_value);
      } else {
        target[key] = source_value;
      }
    } else {
      target[key] = source[key];
    }
  }
}
