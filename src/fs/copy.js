import * as fs from "node:fs";
import { failFn } from "./utils.js";

const copy = async () => {
  // Write your code here
  const filesDir = "./files";
  const filesCopyDir = "./files_copy";

  const isFilesDirPresent = fs.existsSync("./files");
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
