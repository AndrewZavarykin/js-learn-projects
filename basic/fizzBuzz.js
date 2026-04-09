/**
 * Напишите программу, которая выводит на экран числа от 1 до 100.
 * При этом вместо чисел,
 * - кратных 3, программа должна выводить слово Fizz,
 * - а вместо чисел, кратных 5 — слово Buzz,
 * - a число кратно 15, то программа должна выводить слово FizzBuzz
 * Для вывода данных использовать `console.log` (Например `console.log('FizzBuzz');`)
 *
 * Краткая справка по конструкциям языка:
 * https://javascript.ru/basic/syntax-switch-for
 * https://gist.github.com/vvscode/5b5eec5bb5270de3ac27a3e0298430d9
 */
function fizzBuzz() {
  for (let i = 1; i<101; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 5 === 0) console.log('Buzz');
    else if (i % 3 === 0) console.log('Fizz');
    else console.log(i);
  }
}

fizzBuzz();