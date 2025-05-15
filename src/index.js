document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const stove = document.getElementById("new-task-description");
    buildTaskLister(stove.value);
    form.reset();
  });
});

function buildTaskLister(todo) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const img = document.createElement('img')
  img.src = "src/Stove_McKeon_52973.jpg"
  img.alt = "Delete"
  img.style.width = "35px"
  img.style.width = "35px"

  li.textContent = `${todo}   `;
  btn.appendChild(img)

  btn.addEventListener('click', handleDelete);
  li.appendChild(btn);

  document.getElementById("tasks").appendChild(li);
}

function handleDelete(e) {
  console.log(e.target.parentNode)
  e.target.parentNode.parentNode.remove();
}
