import * as fs from "node:fs";
import { failFn } from "./utils.js";

const rename = async () => {
  // Write your code here

  const isWrongFileNamePresent = fs.existsSync("./files/wrongFilename.txt");
  const isProperFileNamePresent = fs.existsSync("./files/properFilename.md");

  if (!isWrongFileNamePresent || isProperFileNamePresent) {
    return failFn();
  }

  fs.rename("./files/wrongFilename.txt", "./files/properFilename.md", () => {});
};

await rename();
