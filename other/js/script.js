/**
 * Created by Gremlin on 20.11.15.
 */

var age = parseInt(window.prompt("Введите возраст"));

console.log('Возраст равен '+age);
if(age>=0 && age<10){
    console.log('Шкет!');
}else if(age>=10 && age<18){
    console.log('Подросший шкет!');
}else if(age>=18 && age<65){
    console.log('Уже не шкет!');
}else if(age>=65 && age<130){
    console.log('Старикашка!');
}else if(age>=130){
    console.log('Лживый подонок!');
}else{
    console.log('Некорректный подонок!');
}
var mess = (age>=18) ? 'можно' : 'нельзя';
console.log('Вам '+mess+' алкоголь');

var n=0;
for(var i=1; i<=100; i++){
    //console.log('i='+i);
    n+=i;
    //console.log('\n\t\tn='+n);
}
console.log('Финальный результат:'+n);
