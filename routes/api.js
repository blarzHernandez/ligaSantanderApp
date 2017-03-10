//importamos
var express = require('express');
var router = express.Router();
var ranking = require('./ranking');

//Definmos rutas
//var teamPosition = [];
router.get('/ranking',function (req, res) {
  //Team positions


  res.status(200).json(ranking.getPosiciones());
});


//Exportamos modulo
module.exports = router;
