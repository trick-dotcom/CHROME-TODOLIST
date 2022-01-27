const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-list input");
const list = document.querySelector(".what-to-do");



let toDos=[];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}
function paintToDo(message){
    const li = document.createElement("li");
    li.id = message.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = message.text;
    btn.innerText = "x";
    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
}
function handleSubmit(event){
    event.preventDefault();
    const whatToDo = todoForm.value;
    todoForm.value="";
    const whatToDoObj={
        text : whatToDo,
        id : Date.now(),
    }
    toDos.push(whatToDoObj);
    paintToDo(whatToDoObj);
    saveToDos();
}



todoList.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem("todos");

if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}