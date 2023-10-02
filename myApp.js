require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

// Root level middleware to log requests

// Serve static files from the "public" directory
app.use("/public", express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {

//     console.log(req.method + " " + req.path + " - " + req.ip);
//   next();
// });

// app.get("/now", (req, res, next) => {
//     req.time = new Date().toString();
//     next(), function (req, res) {
//         res.json({ time: req.time });
//     };
// });

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
  }, function(req, res) {
    res.json(req.time);
  });

// Route handler for /now

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
