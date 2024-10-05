import * as fs from "node:fs";

const rename = async () => {
  // Write your code here
  function failFn() {
    return console.error("FS operation failed");
  }

  const isWrongFileNamePresent = fs.existsSync("./files/wrongFilename.txt");
  const isProperFileNamePresent = fs.existsSync("./files/properFilename.md");

  if (!isWrongFileNamePresent || isProperFileNamePresent) {
    return failFn();
  }

  fs.rename("./files/wrongFilename.txt", "./files/properFilename.md", () => {});
};

await rename();
