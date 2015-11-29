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
function clickedCell(myId,lastMove){
    if(lastMove>0) { //Если сейчас ход крестика
        if(document.getElementById(myId).innerHTML == ''){//Ячейка пустая
            document.getElementById(myId).innerHTML = 'X';//Вписываем Х
            return -lastMove;
        }else{
            console.log('Ячейка занята');
            return lastMove;
        }
    }else{//Ход нолика

        if(document.getElementById(myId).innerHTML == ''){//Ячейка пустая
            document.getElementById(myId).innerHTML = 'O';//Вписываем Х
            return -lastMove;
        }else{
            console.log('Ячейка занята');
            return lastMove;
        }
    }
    return true;
}
function checkWin(){
    for(i=0; i<3; i++) { // По горизонтали
        if (document.getElementById(i+'-0').innerHTML != '' &&
            (document.getElementById(i+'-0').innerHTML == document.getElementById(i+'-1').innerHTML
            &&
            document.getElementById(i+'-1').innerHTML == document.getElementById(i+'-2').innerHTML )
        ) {
            //alert(document.getElementById(i+'-0').innerHTML + ' выйграл!');
            document.getElementById(i+'-0').innerHTML = '<span style="color: #FF3333;">'+document.getElementById(i+'-0').innerHTML+'</span>';
            document.getElementById(i+'-1').innerHTML = '<span style="color: #FF3333;">'+document.getElementById(i+'-1').innerHTML+'</span>';
            document.getElementById(i+'-2').innerHTML = '<span style="color: #FF3333;">'+document.getElementById(i+'-2').innerHTML+'</span>';
            return true;
        }
    }
    for(k=0; k<3; k++) { // По вертикали
        if (document.getElementById('0-'+k).innerHTML != '' &&
            (document.getElementById('0-'+k).innerHTML == document.getElementById('1-'+k).innerHTML
            &&
            document.getElementById('1-'+k).innerHTML == document.getElementById('2-'+k).innerHTML )
        ) {
            //alert(document.getElementById('0-'+k).innerHTML + ' выйграл!');
            document.getElementById('0-'+k).innerHTML = '<span style="color: #FF3333;">'+document.getElementById('0-'+k).innerHTML+'</span>';
            document.getElementById('1-'+k).innerHTML = '<span style="color: #FF3333;">'+document.getElementById('1-'+k).innerHTML+'</span>';
            document.getElementById('2-'+k).innerHTML = '<span style="color: #FF3333;">'+document.getElementById('2-'+k).innerHTML+'</span>';
            return true;
        }
    }
    if(document.getElementById('0-0').innerHTML != ''){ //По дмагонали /
        if(document.getElementById('0-0').innerHTML ==
            document.getElementById('1-1').innerHTML && document.getElementById('0-0').innerHTML ==
            document.getElementById('2-2').innerHTML) {
            //alert(document.getElementById('0-0').innerHTML + ' выйграл!');
            document.getElementById('0-0').innerHTML = '<span style="color: #FF3333;">'+document.getElementById('0-0').innerHTML+'</span>';
            document.getElementById('1-1').innerHTML = '<span style="color: #FF3333;">'+document.getElementById('1-1').innerHTML+'</span>';
            document.getElementById('2-2').innerHTML = '<span style="color: #FF3333;">'+document.getElementById('2-2').innerHTML+'</span>';
            return true;
        }
    }
    if(document.getElementById('2-0').innerHTML != ''){ //По диагонали \
        if(document.getElementById('2-0').innerHTML ==
            document.getElementById('1-1').innerHTML && document.getElementById('2-0').innerHTML ==
            document.getElementById('0-2').innerHTML){
            //alert(document.getElementById('2-0').innerHTML + ' выйграл!');
            document.getElementById('2-0').innerHTML = '<span style="color: #FF3333;">'+document.getElementById('2-0').innerHTML+'</span>';
            document.getElementById('1-1').innerHTML = '<span style="color: #FF3333;">'+document.getElementById('1-1').innerHTML+'</span>';
            document.getElementById('0-2').innerHTML = '<span style="color: #FF3333;">'+document.getElementById('0-2').innerHTML+'</span>';
            return true;
        }
    }
    return false;
}
function cleanField(){
    for(i=0; i<3; i++){
        for(k=0;k<3;k++) {
            document.getElementById(i + '-' + k).innerHTML = '';
        }
    }
    checkEnd=false;
    lastMove=1;
    //igrokOdin= window.prompt('Введите имя первого игрока:');
    //igrokDva= window.prompt('Введите имя второго игрока:');
    //a= getRandom(0,1) ? alert('Первым ходит '+igrokOdin) : alert('Первым ходит '+igrokDva);

}
