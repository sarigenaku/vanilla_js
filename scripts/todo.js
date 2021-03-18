const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

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
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
        console.log("localStorage에 저장한 값 꺼내오는 코드는 아직 완성 X")
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();