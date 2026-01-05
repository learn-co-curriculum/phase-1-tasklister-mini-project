// Add event listener to the form
document.getElementById('create-task-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const taskInput = event.target.elements['new-task-description'].value;
  buildToDo(taskInput);
  event.target.reset(); // Optional: clear the input field after submission
});

// Function to build and append a new task
function buildToDo(task) {
  const li = document.createElement('li');
  li.textContent = task;
  document.getElementById('task').appendChild(li);
}
