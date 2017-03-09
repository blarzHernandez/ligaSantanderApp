var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);




var hostname = 'localhost';
var port = 3000;


app.use(bodyParser.json());

app.use(express.static('src'));

app.get('/hello',function(req, res){

res.status(200).send('Hello Word');
});

//Team positions
teamPosition = [
                {name:'Barca',points:20},
                {name:'Madrid', points:12}
              ];

                io.on('connection',function (socket) {
                //  setTimeout(function(){
                  //  socket.emit('message',{message:teamPosition});
                    console.log("emitiendo mensaje a los 5 minutos");


                //  },1000);


                });



app.listen(port, hostname, function(){
console.log("Servidor inicializado en http:");
});
