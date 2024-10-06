import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const write = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const stream = fs.createWriteStream(
    path.join(__dirname, "files", "fileToWrite.txt")
  );

  process.stdin.on("data", (chunk) => {
    stream.write(chunk);
  });

  process.stdin.on("end", () => {
    stream.end();
  });
};

await write();
