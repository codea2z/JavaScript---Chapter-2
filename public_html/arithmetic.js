/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var sum = 80 + 20;
    var sub = sum - 50;
    var mul = sum * 5;
    var div = sum / 4;
    var mod = sum % 2;
    var inc = ++sum;
    var dec = --sum;
    
    var str = "Sum: " + sum + "<br>Subtraction: " + sub;
    str += "<br>Multiplication: " + mul;
    str += "<br>Division: " + div + "<br>Modulus: " + mod;
    str += "<br>Increment: " + inc;
    str += "<br>Decrement: " + dec;
    document.getElementById("panel").innerHTML = str;
}

document.addEventListener("DOMContentLoaded", init ,false);

