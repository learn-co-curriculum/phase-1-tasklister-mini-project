document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = document.querySelector('#new-task-description');
    const prioritySelect = document.querySelector('#task-priority');
    
    const taskText = input.value;
    const priorityValue = prioritySelect.value;

    const li = document.createElement('li');
    li.textContent = `${taskText} `; 

    if (priorityValue === 'high') {
      li.style.color = 'red';
    } else if (priorityValue === 'medium') {
      li.style.color = 'orange'; 
    } else if (priorityValue === 'low') {
      li.style.color = 'green';
    }
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';

    deleteBtn.addEventListener('click', () => {
      li.remove(); 
    });

    li.appendChild(deleteBtn);
    const taskList = document.querySelector('#tasks');
    taskList.appendChild(li);
  });
});


