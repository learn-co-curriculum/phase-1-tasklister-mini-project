document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById("new-task-description");
    buildTaskLister(stove.value);
    form.reset();
  });
});

function buildTaskLister(todo) {
  const li = document.createElement('li');
  const btn = document.createElement('button');

  li.textContent = todo + " ";
  btn.textContent = 'x';

  btn.addEventListener('click', handleDelete);
  li.appendChild(btn);

  document.getElementById("tasks").appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
