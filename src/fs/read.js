import * as fs from "node:fs";
import { failFn } from "./utils.js";

const read = async () => {
  // Write your code here

  if (!fs.existsSync("./files/fileToRead.txt")) {
    return failFn();
  }

  fs.readFile("./files/fileToRead.txt", "utf-8", (err, data) => {
    console.log(data);
  });
};

await read();
