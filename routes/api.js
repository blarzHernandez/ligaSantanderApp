//importamos
var express = require('express');
var router = express.Router();

//Definmos ruta

router.get('/ranking',function (req, res) {
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

  res.status(200).json(teamPosition);
});
//Exportamos modulo
module.exports = router;
