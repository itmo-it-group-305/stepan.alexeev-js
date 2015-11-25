/**
 * Created by Gremlin on 20.11.15.
 */

var visota = parseInt(window.prompt('Введите высоту треугольника'));
document.write('<style>body {text-align: center;}</style>');
for(var i=1; i<=visota; i++){
    for(var k=1; k<=i; k++) {
        document.write('*');
    }
    document.write('<br>');
}