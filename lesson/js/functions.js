/**
 * Created by Gremlin on 25.11.15.
 */
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function vvodMassiva(){
    var razmer = parseInt(window.prompt('Введите размер массива'));
    var arTemp=[];
    for (i=0; i<razmer; i++){
        arTemp[i]=window.prompt('Введите '+i+' элемент массива');
    }
    return arTemp;
}
//!!! arguments - массив в функции
function countSum(){
    var sum=0;
    for(var i=+arguments[0]; i<=+arguments[1]; i++){
        sum+=i;
    }
    return sum;
}
function returnObject(){
    for(i in arguments[0]){
        document.write(i+' = '+ arguments[0][i]+'<br>');
    }
}
function createObject(){
    var obj={
        value: null,
        left: null,
        right: null,
        root: null
    };
    return obj;
}