import * as fs from "node:fs";
import { failFn } from "./utils.js";

const remove = async () => {
  // Write your code here

  if (!fs.existsSync("./files/fileToRemove.txt")) {
    return failFn();
  }

  fs.unlink("./files/fileToRemove.txt", () => {});
};

await remove();
