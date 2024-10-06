const parseEnv = () => {
  // Write your code here

  Object.entries(process.env).filter((key) => {
    if (key[0].startsWith("RSS")) {
      console.log(`${key[0]}=${key[1]}`);
    }
  });
};

parseEnv();
