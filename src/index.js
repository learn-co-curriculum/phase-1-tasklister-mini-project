document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    logInput(e.target.querySelector('#new-task-description').value)
  })
});
/// tried with getElementbyId and got error could it be the dashes.
/// used the element and hovered over input and confirmed #new-task-description

function logInput(task) {
  let listTask = document.createElement('li')
  listTask.textContent = task
  document.querySelector("#list").appendChild(listTask)
}


