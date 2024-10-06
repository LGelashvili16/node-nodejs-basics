import * as fs from "node:fs/promises";

export function failFn() {
  return console.error("FS operation failed");
}

export async function existDir(path) {
  try {
    await fs.access(path);
    return true;
  } catch (error) {}
}
