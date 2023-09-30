let express = require('express');
let app = express();
// let absolutePath = path.join(__dirname, '/views/index.html');
app.get('/', function (req, res) {
    res.sendFile(__dirname+'/views/index.html');
})




































 module.exports = app;
