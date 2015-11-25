/**
 * Created by Gremlin on 20.11.15.
 */

var x=parseInt(window.prompt('Введите X'));
var y=parseInt(window.prompt('Введите Y'));
var z=parseInt(window.prompt('Введите Z'));
if(x<y && x<z) var samoeMalenkoe = x;
if(y<x && y<z) var samoeMalenkoe = y;
if(z<x && z<y) var samoeMalenkoe = z;
if(x>y && x>z) var samoeBolshoe = x;
if(y>x && y>z) var samoeBolshoe = y;
if(z>x && z>y) var samoeBolshoe = z;
if(x>y && x<z || x<y && x>z) var srednee = x;
if(y>x && y<z || y<x && y>z) var srednee = y;
if(z>x && z<y || z<x && z>y) var srednee = z;

console.log(samoeMalenkoe + ' ' + srednee + ' ' +samoeBolshoe);
