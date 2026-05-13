document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  let formInput = document.querySelector('#new-task-description')
  let taskList = document.querySelector('#tasks')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(formInput.value)
    form.reset()
  })
})

function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn. addEventListener('click', handleDelete)
  btn.textContent = 'x';
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector(`#tasks`).appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
