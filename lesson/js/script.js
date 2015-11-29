/**
 * Created by Gremlin on 20.11.15.
 */
/*document.write(countSum(window.prompt('Сумма от..(n)'),window.prompt('Сумма до..(m)'))); //Вывод суммы последовательности чисел от n до m
document.write('<br>');
var myObj = {
    returnThis : function(){
        for(i in this){
            document.write(i+' = '+ this[i]+'<br>');
        }
    },
    ind1 : 'test1',
    ind2 : 'TEST2',
    ind3 : 'Тест3'
};
document.write('<br><h1>Вывод объекта функцией</h1>');
returnObject(myObj); //Вывод объекта функцией
document.write('<br><h1>Вывод объекта своим же методом</h1>');
myObj.returnThis(); //Вывод объекта методом обекта*/

var a=[1,4,5,10,16,17,21];
document.write('Дан ряд: [');
var n;
for(n=0; n< (a.length); n++){
    document.write(a[n]+'  ');
}
n++;
document.write(']');
for(k=0; k< a.length; k++) {
    document.write('<h1 style="text-align: center;"><br>Вершина - число '+a[k]+'</h1>');
    rootObj = createObject(a[k], 'none');
    for (i = 0; i < a.length; i++) {
        chooseWhereToPlace(a[i], rootObj);
    }
    document.write(vivodDereva(rootObj));
}