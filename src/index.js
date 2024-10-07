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

// theme
let theme = document.createElement("button")
theme.textContent = "theme";
theme.onclick = () => {
  let newContent = prompt("theme ", task);
  if(newContent !== ""){
    lists.textContent = newContent
    
  }

}







//   const form = document.getElementById("create-task-form");
//   const taskList = document.getElementById("tasks");}
  // your  code here
//     form.addEventListener("submit", function(event)) {
//     event.preventDefault();}

//   const color = ["Low","Medium","HIgh"];
//   color.reverse();


//   const colorArray = ["red", "yellow", "green"]
//   colorArray.reverse()
//   const [red,yellow,green] = color
//   console.log(red);
//   console.log(yellow);
//   console.log(green);



// color.sort(function(red,yellow,green){
//  let x = red.type.toLowerCase();
// let y = yellow.toLowerCase();
//   let z = green.type.toLowerCase()


// if (x < y) {return -1;}
// if (x > y) {return 1;}
// if (x < y){return -1}

// return 0;
// }); 


// document.addEventListener('DOMContentLoading',() => {
//   console.log('After DOM loaded') 
//   console.log(document.querySelector('div'))
// })
// console.log('Before DOM Loaded')
// console.log(document.querySelector('div'))



// const ThemeButton = document.getElementById("Theme-Button")
// ThemeButton.addEventListener("mouseout", changeTheme)
// function changeTheme{
//   document.body.classList.toggle("darkmode")
// }
// const Button = document.getElementById("Button"){

// }
// ThemeButton.addEventListener("click", changeTheme)
// function changeTheme{
//   document.body.classList.toggle("darkmode")

