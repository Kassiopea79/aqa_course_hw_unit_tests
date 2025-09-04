/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
let i = 10;
while (i >= 0) {
  evenNumbersResult += i;
  if (i !== 0) {
    evenNumbersResult += '-';
  }
  i -= 2;
}

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
let emoji = ':)';
let j = 1;
while (j <= 5) {
  smilePatternResult += emoji.repeat(j);
  if (j !== 5) {
    smilePatternResult += '\n';
  }
  j++;
}


/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
let k = 0;
while (k < text.length) {
  if (text[k] === ' ') {
    replaceSpacesWithOneResult += '1';
  } else {
    replaceSpacesWithOneResult += text[k];
  }
  k++;
}

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
