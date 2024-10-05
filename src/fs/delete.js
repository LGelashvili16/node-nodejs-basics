import * as fs from "node:fs";

const remove = async () => {
  // Write your code here
  function failFn() {
    return console.error("FS operation failed");
  }

  if (!fs.existsSync("./files/fileToRemove.txt")) {
    return failFn();
  }

  fs.unlink("./files/fileToRemove.txt", () => {});
};

await remove();
