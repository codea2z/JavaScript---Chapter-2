/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var yes = true, no = false;
    var blnA = yes && yes; // true
    var blnB = yes && no; // false
    var blnC = no || yes; // true
    var blnD = no || no; // false
    var tog = !yes; // false
    
    var str = "Are both values true?: " + blnA + "<br>";
    str+= "Are both values true now?: " + blnB + "<br>";
    str+= "Is either value true?: " + blnC + "<br>";
    str+= "Is either value true now?: " + blnD + "<br>";
    str+= "Initial value: " + yes + "<br>";
    str+= "Toggled value: " + tog + "<br>";
    
    document.getElementById("panel").innerHTML = str;
    
}

document.addEventListener("DOMContentLoaded", init, false);


