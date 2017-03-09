//importamos
var express = require('express');
var router = express.Router();

//Definmos ruta

router.get('/ranking',function (req, res) {
  //Team positions
  teamPosition = [{id:1,nombre:'Barca',puntos:20},
                  {id:2, nombre:'Madrid', puntos:12}];

  res.status(200).json(teamPosition);
});
//Exportamos modulo
module.exports = router;
