const ToDoForm = document.getElementById("todo-form");
const TodoInput = ToDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos=[]

const TODOSE_KEY = "toDos"

function saveToDose(){
    localStorage.setItem(TODOSE_KEY, JSON.stringify(toDos))
}

function deleteTodo(e){
   const li = 
   e.target.parentElement;
   li.remove()
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
   saveToDose()
}

function paitnTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id
    const span =  document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "🗑️";

    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = todo.text
    toDoList.appendChild(li)
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = TodoInput.value;
    TodoInput.value = ""
    const newTodoOj = {
        text:newTodo,
        id: Date.now()
    }
    toDos.push(newTodoOj)
    paitnTodo(newTodoOj);
    saveToDose();
}

ToDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOSE_KEY);


if(savedToDos !== null){
    const parsedTodos = JSON.parse(savedToDos)
    toDos = parsedTodos;
    parsedTodos.forEach(paitnTodo)
}