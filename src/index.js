document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let newTask = document.getElementById("new-task-description")
    addToDo(newTask.value)
    form.reset()
  })
})

function addToDo(todo) {
  let li = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener("click", deleteToDo)
  btn.textContent = "   X   "
  li.textContent = `${todo}   `
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li)
}

function deleteToDo(e) {
  e.target.parentNode.remove()
}
