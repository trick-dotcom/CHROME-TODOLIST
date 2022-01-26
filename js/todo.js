const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-list input");
const list = document.querySelector(".what-to-do");

function handleSubmit(event){
    event.preventDefault();
    const whatToDo = todoForm.value;
    localStorage.setItem("todo", whatToDo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = `${whatToDo}`;
    btn.innerText = "x";
    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
}



todoList.addEventListener("submit", handleSubmit);