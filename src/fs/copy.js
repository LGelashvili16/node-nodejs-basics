import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { failFn } from "./utils.js";

const copy = async () => {
  // Write your code here

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filesDir = path.join(__dirname, "files");
  const filesCopyDir = path.join(__dirname, "files_copy");

  console.log(path.join(__dirname, "files"));

  const isFilesDirPresent = fs.existsSync(filesDir);
  const isFilesCopyDirPresent = fs.existsSync(filesCopyDir);

  if (isFilesCopyDirPresent || !isFilesDirPresent) {
    return failFn();
  }

  fs.mkdirSync(filesCopyDir);

  fs.readdir(filesDir, (err, files) => {
    for (let file of files) {
      fs.copyFile(`${filesDir}/${file}`, `${filesCopyDir}/${file}`, () => {});
    }
  });
};

await copy();
