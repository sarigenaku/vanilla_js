const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);
    
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //["aa","bb","cc","dd"] -> 쉼표 앞뒤로 한 칸 띄우기를 하지 않는다.
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;

    li.appendChild(delBtn); 
    li.appendChild(span); //const liVariable = li.appendChild(span); (X)
    li.id = newId;

    toDoList.appendChild(li); //toDoList.appendChild(liVariable); (X)
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); //toDos가 빈 배열이어서, localStorage에서 값을 불러오는 경우라 할지라도 중복이 일어나지 않는 것.
    saveToDos();

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);    
}

init();