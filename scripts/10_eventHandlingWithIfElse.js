const title = document.querySelector(".text5")

const BASE_COLOR = "purple"
const NEW_COLOR = "lightgreen"

const someObject = {
    a: "someString",
    b: function bbb () {
        console.log("객체 안의 this는", this)
        return this.a
    },
}

console.log("단순 호출 시의 this는", this)
console.log("객체 안의 this는 해당 객체인데, 올바르게 작동하는가?", someObject.b()) //someObject.b (X)


function changeColor() {
    const currentColor = title.style.color

    if (currentColor === BASE_COLOR) {
        title.style.color = NEW_COLOR //currentColor = NEW_COLOR는 쓰지 못한다. currentColor의 선언이 const이기 때문에.
        console.log("changed to lightgreen")
    } else {
        this.style.color = BASE_COLOR //currentColor = BASE_COLOR는 쓰지 못한다. currentColor의 선언이 const이기 때문에.  //Q) 왜 this.style.color = BASE_COLOR로 해도 정상 작동하는 거지?
        console.log("changed to purple again")
        console.log("이벤트 시 실행되는 함수 안의 this는", this)
    }
}

function init() {
    title.style.color = BASE_COLOR
    title.addEventListener("mouseenter", changeColor) //changeColor()로 할 경우, 처음부터 lightgreen이 적용되어 있음.
}

init()

function handleOnline() {
    console.log("Now Online!")
}

function handleOffline() {
    console.log("Now Offline!")
}

window.addEventListener("online", handleOnline)
window.addEventListener("offline", handleOffline)
