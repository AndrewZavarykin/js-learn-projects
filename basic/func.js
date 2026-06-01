//"use strict"; // включает строгий режим,

const name1 = "Alice";
const name2 = "Bob"

greet1(name1); // функция greet1 имеет hoisting и может вызываться до её объявления.
function greet1(name) {
    console.log(`Hello, ${name}`)
}

const greet2 = function(name) {
    console.log(`Hello, ${name}`);
}
greet2(name2); // функция greet2 не имеет hoisting и вызывается после объявления

// пример с замыканием
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function printThis() {
    console.log(this);
}
printThis();

const obj = {
    a: "111",
    b: "222",
    c: function() {
        console.log(this);
    },
}
obj.c();

// пример с bind: контекст obj передается в функцию printThis
const printThisWithObj = printThis.bind(obj);
printThisWithObj();