import * as fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { existDir, failFn } from "./utils.js";

const read = async () => {
  // Write your code here

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const readFilePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    if (!(await existDir(readFilePath))) {
      return failFn();
    }

    const text = await fs.readFile(readFilePath, "utf-8");
    console.log(text);
  } catch (error) {
    console.error(error);
  }
};

await read();
