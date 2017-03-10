exports.getPosiciones = function(){
  var  teamPosition = [{id:1,nombre:'Barca',puntos:60},
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

      return teamPosition;

}

exports.getMax = function(){
  var menor = Number.POSITIVE_INFINITY;
  var mayor = 0;
  var arreglo = this.getPosiciones();
  var comp ;
  for(var i= 0 ; i<arreglo.length; i++){
    comp =  arreglo[i].puntos;
    if(comp<menor)menor=comp;
    if(comp>mayor)mayor=arreglo[i];
    console.log(mayor);
  }
  return mayor;
}

exports.getMin = function(){
  var arreglo = this.getPosiciones();
  var menor = Number.POSITIVE_INFINITY;
  var mayor = Number.NEGATIVE_INFINITY;
  var tmp;
for (var i=arreglo.length-1; i>=0; i--) {
    tmp = arreglo[i].puntos;
    if (tmp < menor) menor = arreglo[i];
    if (tmp > mayor) mayor = tmp;
}
  return menor;
}
