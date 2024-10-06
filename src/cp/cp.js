import { fileURLToPath } from "node:url";
import path from "node:path";
import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const childProcess = spawn(
    "node",
    [path.join(__dirname, "files", "script.js"), ...args],
    {
      stdio: ["pipe", "pipe", "inherit"],
    }
  );

  process.stdin.on("data", (data) => {
    childProcess.stdin.write(data);
  });

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
    process.exit();
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["SomeArgument1", "SomeArgument2"]);
