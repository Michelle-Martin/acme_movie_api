const app = require("./app");
const { syncAndSeed } = require("./db");
const port = process.env.PORT || 3000;
const init = async () => {
  await syncAndSeed();
  console.log(`this app listens on port ${port}`);
};

init();
