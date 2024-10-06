const parseEnv = () => {
  // Write your code here
  process.env.RSS_name1 = "value1";
  process.env.RSS_name2 = "value2";

  Object.entries(process.env).filter((key) => {
    if (key[0].startsWith("RSS")) {
      console.log(`${key[0]}=${key[1]}`);
    }
  });
};

parseEnv();
