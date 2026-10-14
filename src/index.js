document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form');

  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDescription = event.target.elements['new-task-description'].value;
    buildTodo(taskDescription);
    event.target.reset();
  });
});

  function buildTodo(taskText) {
    const newLi = document.createElement('li');

    newLi.textContent = taskText;

    const taskList = document.getElementById('tasks');
    taskList.appendChild(newLi);
  }
