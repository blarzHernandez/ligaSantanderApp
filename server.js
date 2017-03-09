var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var api = require('./routes/api');
var index = require('./routes/index');


/*app.set('views',path.join(__dirname,'dist'));
app.set('motor de vistas','ejs');
app.engine('html',require('ejs').renderFile);*/

var hostname = 'localhost';
var port = 3000;


app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use('/',index);
app.get('/',function (req, res) {
  res.sendFile(path.join(__dirname,'index.html'));
});
app.use('/api',api);




                /*io.on('connection',function (socket) {
                //  setTimeout(function(){
                  //  socket.emit('message',{message:teamPosition});
                    console.log("emitiendo mensaje a los 5 minutos");


                //  },1000);


              });*/



app.listen(port, hostname, function(){
console.log("Servidor inicializado en http:");
});
