import * as fs from "node:fs";
import { failFn } from "./utils.js";

const list = async () => {
  // Write your code here
  const filesDir = "./files";

  if (!fs.existsSync("./files")) {
    return failFn();
  }

  fs.readdir(filesDir, (err, files) => {
    console.log(files);
  });
};

await list();
