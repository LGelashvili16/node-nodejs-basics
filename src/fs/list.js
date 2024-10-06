import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { failFn } from "./utils.js";

const list = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filesDir = path.join(__dirname, "files");

  if (!fs.existsSync(filesDir)) {
    return failFn();
  }

  fs.readdir(filesDir, (err, files) => {
    console.log(files);
  });
};

await list();
