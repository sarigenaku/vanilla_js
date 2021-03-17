//변수
const jsTodolist = document.querySelector(".js-todolist"), inputTodolist = jsTodolist.querySelector("input")
const ul = document.querySelector("ul")

//함수
function addNewTask(event) {
    event.preventDefault();
    if (inputTodolist.value) {
        const newTask = inputTodolist.value
        const parent = document.createElement("li")
        const child = document.createTextNode(newTask)

        const TaskToBeAdded = parent.appendChild(child)
        ul.appendChild(TaskToBeAdded)

    } else {
        console.log("No task added")
    }
}

function init() {
    jsTodolist.addEventListener("submit", addNewTask)
}

//init()
init()
