var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/src'));

app.get('/',function(req, res){
      res.end("Getting all position");

});


app.listen(port, hostname, function(){
console.log("Servidor inicializado en http:");
});
