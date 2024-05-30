#!/usr/bin/env node

import fs, { write } from "node:fs";
import path from "node:path";
import * as p from "@clack/prompts";
import { bold, cyan, grey } from "kleur/colors";
import { create } from "create-svelte";
import { package_manager } from "./utils.js";
import {
  constructAndWriteEnvFile,
  createJustShip,
  removePageSvelte,
  writeTemplateFiles,
} from "./index.js";

const { version } = JSON.parse(
  fs.readFileSync(new URL("package.json", import.meta.url), "utf-8")
);

const envjson = JSON.parse(
  fs.readFileSync(new URL("./templates/env.json", import.meta.url), "utf-8")
);

console.log(envjson);
let cwd = process.argv[2] || ".";
console.log(`${grey(`create-justship version ${version}`)}`);

p.intro("Welcome to JustShip! ");

if (cwd === ".") {
  const dir = await p.text({
    message: "Where should we create your project?",
    placeholder: "  (hit Enter to use current directory)",
  });

  if (p.isCancel(dir)) process.exit(1);

  if (dir) {
    cwd = /** @type {string} */ (dir);
  }
}

if (fs.existsSync(cwd)) {
  if (fs.readdirSync(cwd).length > 0) {
    const force = await p.confirm({
      message: "Directory not empty. Continue?",
      initialValue: false,
    });

    // bail if `force` is `false` or the user cancelled with Ctrl-C
    if (force !== true) {
      process.exit(1);
    }
  }
}

const options = await p.group(
  {
    features: () =>
      p.multiselect({
        message: "Select additional options (use arrow keys/space bar)",
        required: false,
        options: [
          {
            value: "eslint",
            label: "Add ESLint for code linting",
          },
          {
            value: "prettier",
            label: "Add Prettier for code formatting",
          },
          {
            value: "playwright",
            label: "Add Playwright for browser testing",
          },
          {
            value: "vitest",
            label: "Add Vitest for unit testing",
          },
          {
            value: "stripe",
            label: "Add Stripe for payments",
          },
        ],
      }),
  },
  { onCancel: () => process.exit(1) }
);

await create(cwd, {
  name: path.basename(path.resolve(cwd)),
  template: "skeleton",
  types: "typescript",
  prettier: options.features.includes("prettier"),
  eslint: options.features.includes("eslint"),
  playwright: options.features.includes("playwright"),
  vitest: options.features.includes("vitest"),
  svelte5: true,
});
removePageSvelte(cwd);
await createJustShip(cwd, { name: "" });

const features = ["base"];
if (options.features.includes("stripe")) {
  // write stripe template files
  features.push("stripe");
  writeTemplateFiles(cwd, "stripe");
}

constructAndWriteEnvFile(envjson, features, cwd);

console.log("\nNext steps:");
let i = 1;

const relative = path.relative(process.cwd(), cwd);
if (relative !== "") {
  console.log(`  ${i++}: ${bold(cyan(`cd ${relative}`))}`);
}

console.log(`  ${i++}: ${bold(cyan(`${package_manager} install`))}`);
// prettier-ignore
console.log(`  ${i++}: ${bold(cyan(`${package_manager} run generate && ${package_manager} run migrate`))}`);
// prettier-ignore
console.log(`  ${i++}: ${bold(cyan('install and run mailpit https://mailpit.axllent.org/docs/install/'))}`);
console.log(`  ${i++}: ${bold(cyan(`${package_manager} run dev -- --open`))}`);

console.log(`\nTo close the dev server, hit ${bold(cyan("Ctrl-C"))}`);
