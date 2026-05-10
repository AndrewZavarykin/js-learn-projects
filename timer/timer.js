// программа запускает таймер на 5 секунд, после чего он останавливается

let intervalId;

function initTimer() {
    const timerContainer = document.querySelector(".timer-container");
    const date = new Date();
    timerContainer.textContent = date.toLocaleTimeString();
}

function updateTimer() {
    intervalId = setInterval(() => initTimer(), 1000);
}

function runApp() {
    initTimer();
    updateTimer();
    setTimeout(() => clearInterval(intervalId), 5000);
}

runApp();