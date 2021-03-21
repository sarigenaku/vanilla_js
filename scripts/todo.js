const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //["aa","bb","cc","dd"] -> 쉼표 앞뒤로 한 칸 띄우기를 하지 않는다.
}

function removeToDos(id) {
    const index = id -1;
    console.log(index);
    localStorage.removeItem("toDos");
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;

    delBtn.innerText = "X";
    //const test = "test value"
    delBtn.addEventListener("click", removeToDos(newId))    

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

    /*if (toDoList.li.delBtn) {

        for (const i = 0; i < 9; i++) {
            delBtn.addEventListener("click", removeToDos(i))
        }
    } else {
        console.log("아직 할일 추가 안 됨")
    }*/  
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