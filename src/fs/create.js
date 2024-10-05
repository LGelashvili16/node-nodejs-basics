import * as fs from "node:fs";
import { failFn } from "./utils.js";

const create = async () => {
  // Write your code here

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
