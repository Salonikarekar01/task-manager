let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
    text: "Learn HTML",
    uniqueNum: 1
},
{
    text: "Learn CSS",
    uniqueNum: 2
},
{
    text: "Learn JavaScript",
    uniqueNum: 3
}
];
let todoCount = todoList.length;


function onToDoStatusChanged(chekboxId, labelId) {
    //let checkboxElement=document.getElementById(chekboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
}

function onDeleteToDo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let chekboxId = "checkbox" + todo.uniqueNum;
    let labelId = "label" + todo.uniqueNum;
    let todoId = "todo" + todo.uniqueNum;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = chekboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function () {
        onToDoStatusChanged(chekboxId, labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", chekboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash", "delete-icon");
    deleteIcon.onclick = function () {
        onDeleteToDo(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function addTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    //adding alert incase use input is null
    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }
    //updating the todo unique id count
    todoCount += 1;
    let newTodo = {
        text: userInputValue,
        uniqueNum: todoCount
    };
    createAndAppendTodo(newTodo);
    //resetting user input to null after adding the todo
    userInputElement.value = "";
}

let addTodoButton = document.getElementById("addTodoButton");
addTodoButton.onclick = function () {
    addTodo();
}