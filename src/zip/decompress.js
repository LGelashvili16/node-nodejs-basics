import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import zlib from "node:zlib";

const decompress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const gunzip = zlib.createGunzip();

  const fileToUnzipPath = path.join(__dirname, "files", "archive.gz");
  const unzippedFilePath = path.join(__dirname, "files", "fileToCompress2.txt");

  const fileToUnzipStream = fs.createReadStream(fileToUnzipPath);
  const unzippedFileStream = fs.createWriteStream(unzippedFilePath);

  fileToUnzipStream.pipe(gunzip).pipe(unzippedFileStream);
};

await decompress();
