/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n = 3;
let str = String(n);
let nn = str + str;
let nnn = str + str + str;
let result = Number(n) + Number(nn) + Number(nnn);
console.log(result);
