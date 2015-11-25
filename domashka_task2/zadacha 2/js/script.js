/**
 * Created by Gremlin on 20.11.15.
 */

var a = parseInt(window.prompt("Введите сторону a"));
var b = parseInt(window.prompt("Введите сторону b"));
var c = parseInt(window.prompt("Введите сторону c"));

if(a==b || a==c || b==c)
    console.log('Треугольник равнобедренный')
else
    console.log('Треугольник не равнобедренный');