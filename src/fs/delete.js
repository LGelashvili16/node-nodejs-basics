import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { failFn } from "./utils.js";

const remove = async () => {
  // Write your code here

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const removeFilePath = path.join(__dirname, "files", "fileToRemove.txt");

  if (!fs.existsSync(removeFilePath)) {
    return failFn();
  }

  fs.unlink(removeFilePath, () => {});
};

await remove();
