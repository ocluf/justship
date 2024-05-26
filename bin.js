#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import * as p from "@clack/prompts";
import { grey } from "kleur/colors";
import { create } from "./index.js";

const { version } = JSON.parse(
  fs.readFileSync(new URL("package.json", import.meta.url), "utf-8")
);
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

await create(cwd, {
  name: path.basename(path.resolve(cwd)),
});
