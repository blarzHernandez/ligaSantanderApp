//importamos
var express = require('express');
var router = express.Router();

//Definmos ruta

router.get('/',function (req, res) {
  res.render('index.html');
});

//Exportamos modulo
module.exports = router;
