const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".todoList"),
    ul = todoList.querySelector("ul");


const TODO = "todoThings";
let todos=[];

function handleDelete(event){
    const li = event.target.parentNode;
    const cleaned = todos.filter(function(todo){
        return todo.id !== +li.id;
    });
    ul.removeChild(li);
    todos = cleaned;
    saveTodo(todos);
}

function paintTodos(obj){
    const li = document.createElement("li");
    const delBtn =document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", handleDelete);
    li.innerText=obj.name;
    li.id=obj.id;
    li.appendChild(delBtn);
    ul.appendChild(li);
}

function saveTodo(value){
    localStorage.setItem(TODO, JSON.stringify(value));
}
function loadTodos(){
    const list = JSON.parse(localStorage.getItem(TODO));
    if (list){
        todos = list;
        for(let i=0; i<todos.length; i++){
            paintTodos(todos[i]);
        }
    }else{
        todos=[];
    }
}

function handleSubmit(event){
    event.preventDefault();
    const todoValue = todoInput.value;
    todoInput.value="";
    const todoObj = {
        id: Math.random(),
        name: todoValue
    };
    todos.push(todoObj);
    saveTodo(todos); 
    paintTodos(todoObj);   
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();