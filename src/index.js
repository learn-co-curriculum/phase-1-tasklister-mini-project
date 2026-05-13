document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")

  form.addEventListener("submit", function (e) {
    e.preventDefault()

    const taskValue = document.querySelector("#new-task-description").value
    miniProject(taskValue)

    form.reset()
  })
})

function miniProject(whateverWeWant) {
  console.log(whateverWeWant)

  const li = document.createElement("li")
  const btn = document.createElement("button")

  li.textContent = whateverWeWant
  btn.textContent = "x"

  li.appendChild(btn)

  document.querySelector("#tasks").appendChild(li)

  btn.addEventListener("click", performTask)
}

function performTask(e) {
  e.target.parentNode.remove()
}
