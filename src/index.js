document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const sortButton = document.getElementById("sort-tasks");
  let tasksArray = []; 
  
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const taskPriority = document.getElementById("task-priority").value;
    const dueDate = document.getElementById("due-date").value;
    const taskUser = document.getElementById("task-user").value;

    const newTask = {
      description: taskDescription,
      priority: taskPriority,
      dueDate: dueDate,
      user: taskUser,
    };

    tasksArray.push(newTask);

    renderTasks(tasksArray);

    taskForm.reset();
  });

  function renderTasks(tasks) {
  
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <span style="color: ${getColorForPriority(task.priority)};">
          ${task.description} - Due: ${task.dueDate} - Assigned to: ${task.user} 
        </span>
        <button class="edit-task" data-index="${index}">Edit</button>
        <button class="delete-task" data-index="${index}">Delete</button>
      `;

      taskList.appendChild(taskItem);
    });

    document.querySelectorAll(".delete-task").forEach(button => {
      button.addEventListener("click", deleteTask);
    });

    document.querySelectorAll(".edit-task").forEach(button => {
      button.addEventListener("click", editTask);
    });
  }

  function getColorForPriority(priority) {
    if (priority === 'high') return 'red';
    if (priority === 'medium') return 'yellow';
    return 'green';
  }

  function deleteTask(event) {
    const taskIndex = event.target.dataset.index;
    tasksArray.splice(taskIndex, 1);
    renderTasks(tasksArray);
  }

  function editTask(event) {
    const taskIndex = event.target.dataset.index;
    const task = tasksArray[taskIndex];

    document.getElementById("new-task-description").value = task.description;
    document.getElementById("task-priority").value = task.priority;
    document.getElementById("due-date").value = task.dueDate;
    document.getElementById("task-user").value = task.user;

    tasksArray.splice(taskIndex, 1);
    renderTasks(tasksArray);
  }

  sortButton.addEventListener("click", () => {
    const sortOrder = sortButton.dataset.sort;
    
    tasksArray.sort((a, b) => {
      const priorities = { low: 1, medium: 2, high: 3 };
      return sortOrder === "ascending" 
        ? priorities[a.priority] - priorities[b.priority]
        : priorities[b.priority] - priorities[a.priority];
    });

    sortButton.dataset.sort = sortOrder === "ascending" ? "descending" : "ascending";
    sortButton.innerText = `Sort by Priority (${sortButton.dataset.sort === 'asc' ? 'Asc' : 'Desc'})`;

    renderTasks(tasksArray);
  });
});
