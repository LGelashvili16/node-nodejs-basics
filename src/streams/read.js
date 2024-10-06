import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "path";

const read = async () => {
  // Write your code here

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const stream = fs.createReadStream(
    path.join(__dirname, "files", "fileToRead.txt")
  );

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("end", () => {
    console.log(" Finished");
  });
};

await read();
