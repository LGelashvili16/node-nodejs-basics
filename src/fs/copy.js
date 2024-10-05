import * as fs from "node:fs";

const copy = async () => {
  // Write your code here
  const filesDir = "./files";
  const filesCopyDir = "./files_copy";

  function failFn() {
    return console.error("FS operation failed");
  }

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
