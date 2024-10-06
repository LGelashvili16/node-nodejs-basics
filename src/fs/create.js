import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { failFn } from "./utils.js";

const create = async () => {
  // Write your code here

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  if (fs.existsSync(path.join(__dirname, "files", "fresh.txt"))) {
    return failFn();
  }

  fs.writeFile(
    path.join(__dirname, "files", "fresh.txt"),
    "I am fresh and young",
    (err) => {
      if (err) {
        return failFn();
      }
      console.log("The file has been created!");
    }
  );
};

await create();
