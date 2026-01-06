/**
 * Initialize form handling: attach submit handler to the task form.
 * Keeps behavior exactly the same but uses clearer names and small helpers
 * so the code reads more like natural language.
 */
function init() {
    const form = document.getElementById("create-task-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = event.target.elements["new-task-description"];
        const text = input.value.trim();

        if (text === "") {
            // Friendly prompt for empty submissions
            alert("Please enter a task first!");
            return;
        }

        buildToDo(text);

        // Clear the input so the user can add another task immediately
        input.value = "";
    });
}

// If the DOM is still loading, wait for it; otherwise initialize now.
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

/**
 * Create a new list item for the given task text and append it to the tasks list.
 * @param {string} taskText - The human-readable task description.
 */
function buildToDo(taskText) {
    const item = document.createElement("li");
    item.textContent = taskText;

    const tasksList = document.getElementById("tasks");
    tasksList.appendChild(item);
}