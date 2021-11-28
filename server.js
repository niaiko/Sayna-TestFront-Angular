const express = require('express');
const path = require('path');

const app = express();
console.log("Start server ***")
app.use(express.static(__dirname + '/dist/<fin-corp>'));
console.log("**** runing server ****")
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+
    '/dist/<fin-corp>/index.html'));});
    app.listen(process.env.PORT || 8080);
console.log("success")