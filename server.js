var express = require('express')
var app = express();

app.get('/', function (reg, res){
    res.send('Hello World');
});

app.listen(8080, function(){
    console.log('listeing 3030');
});
