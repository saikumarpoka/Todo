

let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];

let todoCount = todoList.length;

function onTodoStatusChange(checkboxInputId, checkboxLabelId) {
    let checkboxInputElement = document.getElementById(checkboxInputId);
    let checkboxLabelElement = document.getElementById(checkboxLabelId);
  
    checkboxLabelElement.classList.toggle('checked');
  }

function onClickingDeleteIcon(todoId) {
    todoElement = document.getElementById(todoId);

    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {

    let checkboxInputId = "checkboxInput" + todo.uniqueNo;
    let checkboxLabelId = "checkboxLabel" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoItemContainer = document.createElement("li");
    todoItemContainer.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemContainer.id = todoId; 
    todoItemsContainer.appendChild(todoItemContainer);

    let checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = checkboxInputId;

    checkboxInput.onclick = function() {
        onTodoStatusChange(checkboxInputId, checkboxLabelId);
    }

    todoItemContainer.appendChild(checkboxInput); 

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    todoItemContainer.appendChild(labelContainer);

    let checkboxLabel = document.createElement("label");
    checkboxLabel.textContent = todo.text;
    checkboxLabel.setAttribute("for", checkboxInputId);
    checkboxLabel.classList.add("checkbox-label");
    checkboxLabel.id = checkboxLabelId;
    labelContainer.appendChild(checkboxLabel);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa", "fa-trash", "delete-icon");
    deleteIcon.onclick = function() {
        onClickingDeleteIcon(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);


}


for (let todo of todoList) {
    createAndAppendTodo(todo);
}


function addTodoElement() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    todoCount = todoCount + 1;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    let newTodo = {
        text: userInputValue,
        uniqueNo: todoCount
    }

    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

let addTodoButton = document.getElementById("addButton");
addTodoButton.onclick = function() {
    addTodoElement();
}


