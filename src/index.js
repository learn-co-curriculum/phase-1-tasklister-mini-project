function init() {
    const taskForm = document.getElementById("create-task-form");

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const taskDescription = event.target.elements["new-task-description"].value.trim();

        if (taskDescription === "") {
            alert("Please enter a task first!");
            return;
        }

        buildToDo(taskDescription);

        event.target.elements["new-task-description"].value = "";
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

function buildToDo(taskText) {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const tasksList = document.getElementById("tasks");
    tasksList.appendChild(newTask);
}