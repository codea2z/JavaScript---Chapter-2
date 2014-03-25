/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var sum = 2 * 9 + 12 / 3;
    var str = "18 + 4 = " + sum;
    
    sum = ((2*9) + 12) / 3;
    str += "<br>30 / 3 = " + sum;
    
    sum = (2 * ( 9 + 12 )) / 3;
    str += "<br>42 / 3 = " + sum;
    
    sum = 2 * ( 9 + ( 12 /3 ));
    str += "<br>2 * 13 = " + sum;
    
    document.getElementById("panel").innerHTML = str;
}

document.addEventListener("DOMContentLoaded", init, false);

