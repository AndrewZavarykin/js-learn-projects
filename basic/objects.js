/**
 * Объект - это программная сущность, которая агрегирует несколько значений (примитивы или другие объекты),
 * позволяет хранить и извлекать его внутренние значения по имени.
 * 
 * Объект представляет собой неупорядоченную коллекцию свойств, каждое из которых имеет имя и значение.
 * 
 * Объекты в JavaScript являются динамическими, т.к. свойства можно добавлять, удалять или изменять 
 * в любое время выполнения программы.
 * 
 * Помимо поддержки собственных свойств, объект так же наследует свойства объекта,
 * который является его прототипом.
 * 
 * Прототип - это ссылка на объект "родитель", который так же владеет своими свойствами и прототипом.
 * Если у объекта нет свойства с указанным именем, JS автоматически ищет его в прототипе и так далее 
 * по цепочке, пока не дойдет до Object.prototype (делее будет null)
 * 
 * Свойство объекта имеет имя и значение. Именем свойства может быть любая строка или Symbol,
 * значением свойства может быть любое значение (включая другие объекты и функции).
 * 
 * В дополнение к имени и значению каждое свойство имеет три атрибута свойства:
 *  - writable - если true, значение свойства можно изменить.
 *  - enumerable - если true значение свойства можно перечислить
 *  - configurable - если true свойство можно удалить или изменить его атрибуты.
 */

console.log("===== Создание объектов с помощью объектного литерала =====")
const empty = {};
const point = {x: 0, y: 1};
const point2 = {x: point.x, y: point.y};
const book = {
    "main title": "JavaScript",
    "sub-title": "The definitive Guide",
    for: "all audiences",
    author: {
        firstName: "David",
        lastName: "Flanagan"
    }
}
console.log("empty: ", empty);
console.log("point: ", point);
console.log("point2: ", point2);
console.log("book:", book);

console.log("===== Создание объектов с помощью конструктора =====")
const object = new Object();
const array = new Array();
const date = new Date();
const map = new Map();
console.log("object:", object);
console.log("array:", array);
console.log("date:", date);
console.log("map:", map);

console.log("===== Прототипы =====")
console.log(object.__proto__);
console.log(array.__proto__);
console.log(date.__proto__);
console.log(map.__proto__);

function Person(name, age) { // создаем конструктор объекта Person
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() { // добавляем метод sayHello в прототип Person
    console.log(`Hello, my name is ${this.name}`)
}

Person.prototype.sayAge = function() { // добавляем метод sayAge в прототип Person
    console.log(`I am ${this.age} years old`);
}

const alice = new Person("Alice", 18);
const bob = new Person("Bob", 20);

alice.sayHello(); // вызов метода sayHello
alice.sayAge();
bob.sayHello();
bob.sayAge();

console.log("===== Создание объектов с помощью функции Object.create() =====")
// Первый аргумент функции используется для прототипирования нового объекта.
// Второй (необязательный) аргумент описывает свойства нового объекта.
const obj1 = Object.create(null);
const obj2 = Object.create({x: 0, y:1});
const obj3 = Object.create(Object.prototype); // подобен объекту {} или new Object()
console.log("объект без прототипа:", obj1);
console.log("объект с переданным прототипом:", obj2);
console.log("объект с базовым прототипом Object.prototype:", obj3);

console.log("===== Расширение объектов =====")
const source = { a: 1, b:2 };
const target = {c: 3};
Object.assign(target, source); // расширяет объект target, добавляя в него собственные свойства объекта source
console.log(target);

console.log("===== Запашивание и установка свойста объекта =====")
// Запашивание свойства
 console.log("book author: ", book.author);
console.log("author name: ", book.author.firstName);
console.log("book title: ", book["main title"]);
book.edition = 7; // добавление нового свойства в объект
console.log("book edition: ", book.edition);

// если запрашиваемое свойство отсутствует у объекта, оно будет запрашиваться далее по цепочке объектов прототипов.
// если свойство не найдено, вернется undefined; 
const b = {};
b.x = 1;
const p = Object.create(b);
p.y = 2;
const q = Object.create(p);
q.z = 3;
console.log(q.x + q.y + q.z); // 6

// Наследование свойств действует только при запрашивании свойства, а не при его изменении.
// Т.е. невозможно изменить свойство у родительского объекта через дочерний объект.

// Как защититься от ошибок при запрашивании свойств у объекта
let lastName = undefined;
if (book.author) { // проверяем наличие объекта author в объекте book
    lastName = book.author.lastName;
}
lastName = book && book.author && book.author.lastName;
lastName = book?.author?.lastName;

// операция delete удаляет свойство из объекта и возвращает true, если удаление прошло
// операция delete не удаляет наследуемые свойства и свойства с атрибутом configurable: false
delete book.for;


// проверка свойств
let ob = {x: 1};
console.log("x" in ob); // true
console.log("y" in ob); // false
console.log("toString" in ob); // true т.к. наследуе от прототипа Object

console.log(ob.hasOwnProperty("x")); // true
console.log(ob.hasOwnProperty("y")); // false
console.log(ob.hasOwnProperty("toString")); // false т.к. отсутствует собственное свойство

// перечисление свойств объекта
console.log("===== Перечисление свойств объекта =====");
const myObject = {x: 1, y: 2};
console.log(myObject.propertyIsEnumerable("toString")); // false , т.к. не является перечислимым
for (let p in myObject) {
    console.log(p + ": " + myObject[p]); // выведет все перечислимые свойства в том числе и наследуемые
}

for (let p in myObject) {
    if (!myObject.hasOwnProperty(p)) continue;
    console.log(p + ": " + myObject[p]); // выводит только собственные перечислимые свойства
}

Object.keys(myObject).forEach(function(key) { 
    console.log(key); // выводит список всех собственных перечислимых свойств объекта в виде массива, кроме Symbol
})

Object.values(myObject).forEach(function(value) {
    console.log(value); // выводит список значений собственных перечислимых свойств
})

Object.entries(myObject).forEach(function(entry) {
    console.log(entry);
})

console.log("===== Cериализация объекта в JSON =====")
const json = JSON.stringify(myObject);
console.log(json);
const str = JSON.parse(json);
console.log(str);