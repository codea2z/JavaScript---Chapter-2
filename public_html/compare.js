/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var strA = "JavaScript" === "JAVASCRIPT"; //false
    var strB = "JavaScript" === "JavaScript"; //true
    var flt = 7.5 === 7.5; // true
    var intA = 8 !== 8; // false
    var intB = 24 > 12; // true
    var intC = 24 < 12; // false
    var intD = 24 <= 24; // true 
    
    var str = "String equality test 1: " + strA;
    str += "<br>String equality test 2: " + strB;
    str += "<br>Float equality test: " + flt;
    str += "<br>Integer inequality test: " + intA;
    str += "<br>Greater than test: " + intB;
    str += "<br>Less than test: " + intC;
    str += "<br>Less than or equal test: " + intD;
    
    document.getElementById("panel").innerHTML = str; 
}

document.addEventListener("DOMContentLoaded", init, false);