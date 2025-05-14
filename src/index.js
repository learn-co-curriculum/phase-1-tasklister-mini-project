const form = document.querySelector('#create-task-form')
const taskList = document.getElementById('tasks');
const taskDescription = document.getElementById('new-task-description')

const addElementToList = (task) => {
  const newEl = document.createElement('li');
  newEl.textContent = task;
  taskList.appendChild(newEl);
  taskDescription.value = '';
  taskDescription.placeholder = 'description'
}

const submitAction = (formSubmission) => {
  formSubmission.preventDefault()
  if (taskDescription.value != '') {
    addElementToList(taskDescription.value)
  } else {
    taskDescription.placeholder = 'Text Cannot be Blank!'
  }
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', submitAction)
});
