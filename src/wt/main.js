import { fileURLToPath } from "node:url";
import path from "node:path";
import os from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const cpuThreadsNumber = os.cpus().length;

  const workers = [];

  for (let i = 0; i < cpuThreadsNumber; i++) {
    const worker = new Worker(path.join(__dirname, "worker.js"));
    worker.postMessage(10 + i);
    workers.push(worker);
  }

  const workersPromises = workers.map(
    (worker) =>
      new Promise((resolve) => {
        worker.on("message", (msg) => {
          resolve(msg);
        });

        worker.on("error", () => {
          resolve({ status: "error", result: null });
        });
      })
  );

  const resolvedPromises = await Promise.all(workersPromises);

  console.log(resolvedPromises);
};

await performCalculations();
