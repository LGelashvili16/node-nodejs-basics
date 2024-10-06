import * as fs from "node:fs/promises";
import { existDir, failFn } from "./utils.js";

const read = async () => {
  // Write your code here
  try {
    if (!(await existDir("./files/fileToRead.txt"))) {
      return failFn();
    }

    const text = await fs.readFile("./files/fileToRead.txt", "utf-8");
    console.log(text);
  } catch (error) {
    console.error(error);
  }
};

await read();
