#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { dist, mkdirp } from "./utils.js";
import ignore from "ignore";

/** @type {import('./types/index.js').create} */
export async function create(cwd, options) {
  mkdirp(cwd);
  writeTemplateFiles(cwd);
}

/**
 * Write template files to the specified directory.
 * @param {string} cwd
 */
function writeTemplateFiles(cwd) {
  const templateDir = dist("template");
  const targetDir = dist(cwd);
  const ig = loadIgnoreConfig(templateDir);

  copyTemplate(templateDir, targetDir, ig, cwd);
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

    if (ig?.ignores(relativePath)) {
      return;
    }

    if (fs.statSync(srcPath).isDirectory()) {
      copyTemplate(srcPath, destPath, ig, projectName);
    } else {
      if (item === ".env.example") {
        destPath = path.join(destDir, ".env");
      }
      let content = fs.readFileSync(srcPath);
      let contentStr = content.toString();
      contentStr = contentStr.replace(/~TODO-NAME~/g, projectName);
      fs.writeFileSync(destPath, contentStr, "utf8");
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
