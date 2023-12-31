require('dotenv').config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");

// Root level middleware to log requests
app.get("/json", function (req, res) {
    console.log(process.env.MESSAGE_STYLE);
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ message: "HELLO JSON" });
    } else {
        res.json({ message: "Hello json" });
    }
});

// Serve static files from the "public" directory
app.use("/public", express.static(path.join(__dirname, "public")));

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// // Mount the URL encoded data middleware before your routes
// app.use(urlencodedParser);

// // app.use((req, res, next) => {

// //     console.log(req.method + " " + req.path + " - " + req.ip);
// //   next();
// // });

// // app.get("/now", (req, res, next) => {
// //     req.time = new Date().toString();
// //     next(), function (req, res) {
// //         res.json({ time: req.time });
// //     };
// // });

// app.get(
//     "/now",
//     function (req, res, next) {
//         req.time = new Date().toString();
//         next();
//     },
//     function (req, res) {
//         res.json({ time: req.time });
//     }
// );

// app.post("/name", (req,res) => {
//     const firstName = req.body.first;
//     const lastName = req.body.last;
//     console.log(express.version);
//     res.json({ name: firstName+ " "+ lastName });
// });

// app.get("/:word/echo", (req, res) => {
//     const { word } = req.params;
//     res.json({
//         echo: word,
//     });
// });
// // Route handler for /now

// // Define routes
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });


module.exports = app;
