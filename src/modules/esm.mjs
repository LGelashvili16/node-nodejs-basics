// const path = require('path');
// const { release, version } = require('os');
// const { createServer: createServerHttp } = require('http');
// require('./files/c');

import path from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import { fileURLToPath } from "node:url";
import "./files/c.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

const loadJson = async () => {
  if (random > 0.5) {
    // unknownObject = require("./files/a.json");
    const module = await import("./files/a.json", { with: { type: "json" } });

    unknownObject = module.default;
  } else {
    // unknownObject = require("./files/b.json");
    const module = await import("./files/b.json", { with: { type: "json" } });

    unknownObject = module.default;
  }
};

await loadJson();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
