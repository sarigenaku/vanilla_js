const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const ARRAY_LS = []

function saveToDo(text) {
    ARRAY_LS.push(text);
    localStorage.setItem(TODOS_LS, JSON.stringify(ARRAY_LS)); //["aa","bb","cc","dd"] -> 쉼표 앞뒤로 한 칸 띄우기를 하지 않는다.
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";

    const span = document.createElement("span");
    span.innerText = text;

    li.appendChild(delBtn); 
    li.appendChild(span); //const liVariable = li.appendChild(span); (X)
    toDoList.appendChild(li); //toDoList.appendChild(liVariable); (X)
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    saveToDo(currentValue);
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = JSON.parse(localStorage.getItem(TODOS_LS));
    if (toDos !== null) {
        toDos.forEach(element => {
            ARRAY_LS.push(element); //element.text (X)
            paintToDo(element);
        });
    } else {
        console.log("새로운 ToDo를 추가해 주세용")
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();