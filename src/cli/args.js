const parseArgs = () => {
  // Write your code here

  let obj = {};
  const clArguments = process.argv.slice(2);

  for (let i = 0; i < clArguments.length; i += 2) {
    obj = { ...obj, [clArguments[i]]: clArguments[i + 1] };
  }

  for (let [key, val] of Object.entries(obj)) {
    console.log(`${key} is ${val}`);
  }
};

parseArgs();
