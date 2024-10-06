import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { failFn } from "./utils.js";

const rename = async () => {
  // Write your code here

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const isWrongFileNamePresent = fs.existsSync(
    path.join(__dirname, "files", "wrongFilename.txt")
  );
  const isProperFileNamePresent = fs.existsSync(
    path.join(__dirname, "files", "properFilename.md")
  );

  if (!isWrongFileNamePresent || isProperFileNamePresent) {
    return failFn();
  }

  fs.rename(
    path.join(__dirname, "files", "wrongFilename.txt"),
    path.join(__dirname, "files", "properFilename.md"),
    () => {}
  );
};

await rename();
