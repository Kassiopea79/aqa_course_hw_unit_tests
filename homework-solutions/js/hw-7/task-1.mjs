/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  let result = [];
  for (let i = 0; i < arrays.length; i++) {
    let arr = arrays[i];
    for (let j = 0; j < arr.length; j++) {
      result.push(arr[j]);
    }
  }
  return result;
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  let parts = sentence.split(" ");
  let result = "";
  let first = true;
  for (let i = 0; i < parts.length; i++) {
    let w = parts[i];
    if (!w || w.trim() === "") continue;
    w = w.trim().toLowerCase();
    if (first) {
      result += w;
      first = false;
    } else {
      result += "_" + w[0].toUpperCase() + w.slice(1);
    }
  }
  return result;
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

export { mergeArrays, fibonacci, devideBy };
