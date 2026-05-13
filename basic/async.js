//пример асинхронной функции с использованием callback

function fetchData(callback) {
    console.log("print 1")
    const data = "print 3";
    setTimeout(callback, 1000, data);
}

function myCallback(data) {
    console.log(data);
}

function someFunction() {
    console.log("print 2");
}

fetchData(myCallback);
someFunction();


