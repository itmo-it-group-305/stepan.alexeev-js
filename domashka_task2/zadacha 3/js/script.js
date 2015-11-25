/**
 * Created by Gremlin on 20.11.15.
 */

var chislo = window.prompt("Введите число");

if(chislo.length==2 && !(chislo%2))
    console.log('Является четным двузначным')
else
    console.log('Не является чётным двузначным');