import * as fs from "node:fs";

const create = async () => {
  // Write your code here

  function failFn() {
    return console.error("FS operation failed");
  }

  if (fs.existsSync("./files/fresh.txt")) {
    return failFn();
  }

  fs.writeFile("./files/fresh.txt", "I am fresh and young", (err) => {
    if (err) {
      return failFn();
    }
    console.log("The file has been created!");
  });
};

await create();
