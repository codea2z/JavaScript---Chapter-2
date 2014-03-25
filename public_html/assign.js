/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var msg = "JavaScript"; msg += " Code";// JavaScript Code
    var flt = 7.5; flt += 2.25;// 10
    var intA = 8; intA -= 4;// 4
    var intB = 24; intB *= intA;// 96
    var intC = 24; intC /= intA;// 6
    var intD = 24; intD %= intA;// 0
    
    var str = "Add & assign string: " + msg;
    str += "<br>Add & assign float: " + flt;
    str += "<br>Subtract & assign float: " + intA;
    str += "<br>Multiply & assign float: " + intB;
    str += "<br>Divide & assign float: " + intC;
    str += "<br>Modulus & assign float: " + intD;
    
    document.getElementById("panel").innerHTML = str;
}

document.addEventListener("DOMContentLoaded",init,false);