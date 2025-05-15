document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    addToDo(e.target.new_task_description.value)
  })
})

function addToDo(todo) {
  let li = document.createElement("li")
  let btn = document.createElement("button")
  btn.textContent = " X "
  li.textContent = `${todo}  `
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li)
}
