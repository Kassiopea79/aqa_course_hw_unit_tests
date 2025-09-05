/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

let forEach = [];
numbers.forEach(function (n) {
if (n % 3 === 0) {
   forEach.push(n);
}
});
let map = numbers.map(function (n) {
   return n - numbers.length;
});
let filter = numbers.filter(function (n, i, arr) {
   if (i > 0 && n > arr[i - 1]) {
   return true;
}
   return false;
});
let find = numbers.find(function (n, i) {
   return n === i;
});
let sort = numbers.slice().sort(function (a, b) {
   return a - b;
});
let reduce = numbers.reduce(function (sum, n) {
   return sum + n;
}, 0);
let some = numbers.some(function (n) {
   return n > 90;
});
let every = numbers.every(function (n) {
   return n >= 10 && n <= 99;
});

export { forEach, map, filter, find, sort, reduce, some, every };
