const BASE_COLOR = "purple"
const NEW_COLOR = "lightgreen"
const TITLE = document.querySelector(".text5")

function changeColor() {
    if (TITLE.style.color == BASE_COLOR) {
        TITLE.style.color = NEW_COLOR
        console.log("changed to lightgreen")
    } else {
        TITLE.style.color = BASE_COLOR
        console.log("changed to purple again")
    }
}

function init() {
    TITLE.style.color = BASE_COLOR
    TITLE.addEventListener("click", changeColor) //changeColor()로 할 경우, 처음부터 lightgreen이 적용되어 있음.
}

init()

function online() {
    console.log("Now Online!")

}

function offline() {
    console.log("Now Offline!")
}

window.addEventListener("online", online)
window.addEventListener("offline", offline)
