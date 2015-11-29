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
function createObject(val,rt){
    var obj={
        value: val,
        left: null,
        right: null,
        root: rt
    };
    return obj;
}
function empty(objParam){
    if(objParam==null)
        return true
     else
        return false;
}
function chooseWhereToPlace(val,rt){
   // console.log(rt);
    if(val<rt.value && empty(rt.left)){
        rt.left=createObject(val,rt);
    }else if(val>rt.value && empty(rt.right)){
        rt.right=createObject(val,rt);
    }else if(!empty(rt.left)&& val<rt.value){
        chooseWhereToPlace(val,rt.left);
    }else if(!empty(rt.right) && val>rt.value){
        chooseWhereToPlace(val,rt.right);
    }
  /*  if(val<rt.value){
        if(notEmpty(rt.left)){
            chooseWhereToPlace(val,rt.left);
        }else{
            rt.left=createObject(val,rt);
        }
    }else{
        if(notEmpty(rt.left)){
            chooseWhereToPlace(val,rt.right);
        }else{
            rt.right=createObject(val,rt);
        }
    }*/

}
function vivodDereva(obj1){
    var obj1 = obj1;
    var html='';
        html+='<table width="100%" style="border: 1px solid #000; border-collapse: collapse; table-layout: auto" cellspacing="0" cellpadding="0">';
        html+='<tr><td colspan="2" style="text-align:center; vertical-align: top;">'+ obj1.value +'</td></tr>';
        if(obj1.left)
            html+='<tr><td style="text-align:center; vertical-align: top; width:50%; border: 1px solid #000; border-collapse: collapse; box-sizing: border-box;">' + vivodDereva(obj1.left) + '</td>'
        else
            html+='<tr><td style="text-align:center; vertical-align: top; width:50%; border: 1px solid #000; border-collapse: collapse; box-sizing: border-box;">&nbsp;</td>';
    if(obj1.right)
            html+='<td style="text-align:center; vertical-align: top; width:50%; border: 1px solid #000; border-collapse: collapse; box-sizing: border-box;">' + vivodDereva(obj1.right) + '</td></tr>'
        else
            html+='<td style="text-align:center; vertical-align: top; width:50%; border: 1px solid #000; border-collapse: collapse; box-sizing: border-box;">&nbsp;</td></tr>';
        html+='</table>';
    return html;
}