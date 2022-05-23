document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const newTask = e.target[ 'new-task-description' ].value;
    const li = document.createElement('li')
    li.textContent = newTask
    document.getElementById('tasks').appendChild(li)
  })
});
