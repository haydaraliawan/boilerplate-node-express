let express = require('express');
let app = express();
const path = require('path');
// let absolutePath = path.join(__dirname, '/views/index.html');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/views/index.html');
})




































 module.exports = app;
