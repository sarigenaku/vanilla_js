//변수
//currentUser, elements to show outputs
const currentUser = localStorage.getItem("currentUser")
const jsInput = document.querySelector(".js-input"), ip = jsInput.querySelector("input") //class 속성값이 아니니까 .input (X)
const jsGreetings = document.querySelector(".js-greetings"), h = jsGreetings.querySelector("h1")

//함수
//currentUser가 있으면 헬로, 없으면 변화 없음
function greetings() {
    if (currentUser === null) {
        console.log("No one assigned")
    } else {
        ip.classList.remove("visible")
        ip.classList.add("invisible")
        h.classList.remove("invisible")
        h.classList.add("visible")
        h.innerHTML = `Hello! ${currentUser}!`
    }
}

//init()
function init() {
    greetings()
}

//함수 실행
init()