document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", function(e) {
    e.preventDefault()
  })
  // document.querySelector('form').addEventListener('submit', function(e) {
    // const taskValue = e.target.tasks.value
    // const taskValue = document.querySelector(#tasks).value
    const taskValue = document.querySelector("#new-task-description").value
    miniProject(taskValue)
    // console.log(addEventListener)
    // console.log(miniProject)
    form.reset()
   // #create-task-form POST?? 
  })

function miniProject(whateverWeWant) {
console.log(miniProject)
  const li = document.createElement("li")
  const btn = document.createElement("button")
  li.textContent = taskText
  btn.textContent = "x"

  li.appendChild(btn)
  
  document.querySelector("#tasks").appendChild(li)
  btn.addEventListener("click", performTask)
  
  
  //p.appendChild(btn)
 

//  / console.log(btn)
 // console.log(tasks)
}

function performTask(e) {
  e.target.parentNode.remove()
}