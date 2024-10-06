import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import crypto from "node:crypto";

const calculateHash = async () => {
  // Write your code here

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");
    const stream = fs.createReadStream(
      path.join(__dirname, "files", "fileToCalculateHashFor.txt")
    );

    stream.on("data", (chunk) => {
      hash.update(chunk);
    });

    stream.on("end", () => {
      console.log(hash.digest("hex"));
      resolve();
    });
  });
};

await calculateHash();
