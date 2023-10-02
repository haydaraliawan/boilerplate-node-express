require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

// Root level middleware to log requests
app.use((req, res, next) => {
  const logString = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logString);
  next();
});

// Serve static files from the "public" directory
app.use("/public", express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/json", function (req, res) {
  let resObj = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

module.exports = app;