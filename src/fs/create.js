import * as fs from "node:fs";

const create = async () => {
  // Write your code here
  if (fs.existsSync("./files/fresh.txt")) {
    return console.error("FS operation failed");
  }

  fs.writeFile("./files/fresh.txt", "I am fresh and young", (err) => {
    if (err) {
      console.error("Error occurred while creating the file!");
      return;
    }
    console.log("The file has been created!");
  });
};

await create();
