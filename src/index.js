document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target['new-task-description'].value)
    form.reset()
  })
});

function handleToDo(todo){
  let task = document.createElement('li')
  task.textContent = `${todo}`
  document.querySelector('#tasks').appendChild(task)
}
