const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
    
}

function submitName() {
    userName = input.value;
    saveName(userName);
    greeting.classList.add(SHOWING_CN)
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        form.classList.add(SHOWING_CN);
        input.addEventListener("click", submitName)
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();