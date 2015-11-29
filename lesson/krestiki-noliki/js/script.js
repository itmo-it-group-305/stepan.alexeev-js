/**
 * Created by Gremlin on 20.11.15.
 */
arr=[null, null, null, null, null, null, null, null, null];
var lastMove=1;
var checkEnd;
var igrokOdin;
var igrokDva;
var a;
document.write('<style>body{ font-size: 100px;}</style><table border="1">');
for(i=0; i<3; i++){
    document.write('<tr>');
    for(k=0;k<3;k++) {
        document.write('<td id="' + i + '-' + k + '" onClick="if(!checkEnd){lastMove=clickedCell(this.id,lastMove); checkEnd=checkWin();}" style="width:1.5em; height: 1.5em; text-align: center; cursor:pointer;"></td>');
    }
    document.write('</tr>');
}
document.write('<tr><td colspan="3" style="cursor:pointer;" onclick="cleanField()">ОЧИСТИТЬ</td></tr>')
document.write('</table>');
cleanField();