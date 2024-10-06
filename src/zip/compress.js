import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import zlib from "node:zlib";

const compress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileToCompressPath = path.join(
    __dirname,
    "files",
    "fileToCompress.txt"
  );
  const archiveFilePath = path.join(__dirname, "files", "archive.gz");
  const gzip = zlib.createGzip();

  const compressFileStream = fs.createReadStream(fileToCompressPath);
  const outputFileStream = fs.createWriteStream(archiveFilePath);

  compressFileStream.pipe(gzip).pipe(outputFileStream);
};

await compress();
