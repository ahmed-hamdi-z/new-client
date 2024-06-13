const app = require("./app");
const connectDatabase = require('./config/database')
const dotenv = require('dotenv')


// Handdle unaught exceptions
process.on(`uncaughtException`, (err) => {
  console.log(`Error: ${err.stack}`);
  console.log("shuting down the server");
  process.exit(1);
});

// Connecting Database.
connectDatabase();

// setting up config file
dotenv.config({ path: "backend/config/config.env" });


const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT:${process.env.PORT} in ${process.env.NODE_ENV} mode.node`
  );
});


// handdle unhanddle promis rejectiona
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log("shuting down the server");
  server.close(() => {
    process.exit(1);
  });
});
