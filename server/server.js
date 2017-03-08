var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'dist')));

app.all('/',function(req, res, next){
  console.log('Corriendo en el path');
});


app.listen(port, hostname, function(){
console.log("Servidor inicializado");
});
