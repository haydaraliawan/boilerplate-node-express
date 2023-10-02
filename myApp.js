require('dotenv').config();
let express = require('express');
let app = express();
const path = require('path');
// let absolutePath = path.join(__dirname, '/views/index.html');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/views/index.html');
})


app.get('/json', function (req, res) {
    let resObj = {"message": "Hello json"};
    console.log(process.env.MESSAGE_STYLE);
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": "HELLO JSON"});
    }else{
        
        res.json({"message": "Hello json"});
    }
});




































 module.exports = app;
