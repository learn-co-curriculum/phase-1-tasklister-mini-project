// const { list } = require("mocha/lib/reporters");

document.addEventListener("DOMContentLoaded",(event) => {
  event.preventDefault();
  const form = document.getElementById("create-task-form")
  const list = document.getElementById("tasks")
  form.onsubmit = (e) => {
    
    e.preventDefault();
    let task = document.getElementById("new-task-description" ) .value;
    let color = document.getElementById("select_color").value;
    list.appendChild(addTodoList(task, color));
    form.reset();
    }

    function addTodoList(todo, colors){
      let lists = document.createElement("li");
      lists.textContent = todo;
      lists.style.color = colors;
    // add delete Button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    lists.appendChild(deleteButton); 
    deleteButton.onclick = () => {
      lists.remove()
    }
let edit = document.createElement("button");
edit.textContent = "edit";
edit.onclick = () =>{
  let newContent = prompt("Edit item", task);
  if ( newContent !== "") {
      lists.textContent = newContent;
      lists.appendChild(del)
      lists.appendChild(edit)
  }
};
lists.appendChild(edit)
let del = document.createElement("button");
del.textContent = "X";
del.onclick = () => {
    lists.remove();
}
lists.appendChild(del)
    return lists;

    }})











