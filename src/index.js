document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', event => {
    event.preventDefault()
    handleToDo();

})
})

function handleToDo() {
  let searchBoxValue = document.getElementById("new-task-description").value 
  let listItem = document.createElement('li')
  let deleteBtn = document.createElement('button')
  listItem.textContent = searchBoxValue
  deleteBtn.textContent = ' X '
  document.getElementById("tasks").appendChild(listItem).appendChild(deleteBtn)

  deleteBtn.addEventListener('click', () => listItem.remove())
}

