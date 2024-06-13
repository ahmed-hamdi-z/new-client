const express = require("express");
const app = express();

const dotenv = require("dotenv");

const path = require("path");

dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());

// import all routes
const hi = require("./routes/allRoutes");

app.use("/api/v1", hi);

module.exports = app;
