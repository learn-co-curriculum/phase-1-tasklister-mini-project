document.addEventListener("DOMContentLoaded", () => {

  // your code here
  
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(document.getElementById("new-task-description").value === ""){
      alert("You have an empty task!")
    }

    // Access the tasks list
    else {
      const tasks = document.getElementById("tasks");
    
    // Create a new list item for the new task
    // and set the text for it
    const task = document.createElement("li");
    task.innerText = document.getElementById("new-task-description").value + " ";

    // Create button for the list item
    const button = document.createElement("button");
    button.innerText = "X";

    // Add click event listener to the button
    // When the button is clicked, remove the task
    button.addEventListener("click", function () {
      task.remove();
    })

    // Append button to the list item
    task.append(button);

    // Append the new list item to the tasks list
    tasks.append(task);

    // Empty the input textbox
    document.getElementById("new-task-description").value = "";
  }
  });
});
