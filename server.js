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


//Team positions
teamPosition = [{id:1,nombre:'Barca',puntos:60},
                {id:2, nombre:'Madrid', puntos:59},
                {id:4,nombre:'Sevilla',puntos:56},
                {id:3,nombre:'Atletico',puntos:49},
                {id:5,nombre:'R.Sociedad',puntos:48},
                {id:6,nombre:'Villareal',puntos:45},
                {id:7,nombre:'Athetic',puntos:41},
                {id:8,nombre:'Eibar',puntos:39},
                {id:9,nombre:'Español',puntos:36},
                {id:10,nombre:'Celta',puntos:35},
                {id:11,nombre:'Alaves',puntos:34},
                {id:12,nombre:'Valencia',puntos:29},
                {id:13,nombre:'Las Palmas',puntos:32},
               ];

io.sockets.on('connection',function (socket) {
          socket.emit('message',"Equipo en primer lugar");


});



server.listen(port, hostname, function(){
console.log("Servidor inicializado en http:");
});
