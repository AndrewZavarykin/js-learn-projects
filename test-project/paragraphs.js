/**
 * Написать скрипт для реализации следующего приложения.
 * На странице должны быть три текстовых параграфа, поле ввода и кнопка.
 * Напишите скрипт, который будет выполнять следующие условия: 
 *  1.Кнопка скрыта, если в поле ввода нет значения. 
 *  2.При клике на кнопку добавляется новый параграф, содержащий текст из поля ввода. 
 *  3.Если параграфов становится больше 4, первый из них удаляется.
 */

function renderParagraphs() {
    const container = document.createElement("div");
    container.className = "container";
    for (let i=0; i<3; i++) {
        const paragraph = document.createElement("p");
        paragraph.textContent = i;
        paragraph.className = "par-item";
        container.appendChild(paragraph);
    }
    document.body.appendChild(container);
}

function renderInput() {
    const inputEl = document.createElement("input");
    inputEl.id = "input";
    inputEl.className = "input";
    inputEl.type = "text";
    document.body.appendChild(inputEl);
}

function renderButton() {
    const buttonEl = document.createElement("button");
    buttonEl.className = "button";
    buttonEl.textContent = "Add paragraph";
    buttonEl.hidden = true;
    document.body.appendChild(buttonEl);
}

function setEventListenerOnInput() {
    const input = document.querySelector("#input");

    // Инициализация состояния кнопки при загрузке
    checkButtonVisibility();
    input.addEventListener("input", checkButtonVisibility);
}

function checkButtonVisibility() {
    const value = document.querySelector("#input").value;
    const button = document.querySelector('.button');
    if (value.trim().length > 0) {
        button.hidden = false;
    } else {
        button.hidden = true;
    }
}

function setEventListenerOnButton() {
    const button = document.querySelector(".button");
    button.addEventListener("click", buttonHandler);
}

function buttonHandler(event) {
    const text = document.getElementById("input").value;
    if (text.trim().length > 0) {
        addParagraph(text);
        clearInput();
        removeFirstParagraph();
    }
}

function addParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.className = "par-item";
    document.querySelector(".container").appendChild(paragraph);
}

function clearInput() {
    const inputEl = document.querySelector(".input");
    const buttonEl = document.querySelector(".button");
    inputEl.value = "";
    buttonEl.hidden = true;
}

function removeFirstParagraph() {
    const paragraphsConteiner = document.querySelector(".container");
    if (paragraphsConteiner.childNodes.length > 4) {
        const firstParagraph = paragraphsConteiner.firstChild;
        firstParagraph.remove();
    }
}

export function initApp() {
    renderParagraphs();
    renderInput();
    renderButton();
    setEventListenerOnInput();
    setEventListenerOnButton();
};

//toto

initApp();

