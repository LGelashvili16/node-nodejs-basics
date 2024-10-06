import stream from "node:stream";

const transform = async () => {
  // Write your code here

  const reverseTransformStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split("").reverse().join("");

      callback(null, reversedChunk);
    },
  });

  process.stdin.pipe(reverseTransformStream).pipe(process.stdout);
};

await transform();
