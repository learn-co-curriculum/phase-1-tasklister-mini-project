document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector("form")
  
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const tasks = document.getElementById("tasks")

    const task = document.createElement("li");
    task.innerText = document.getElementById("new-task-description").value + " "
    tasks.append(task)

    const button = document.createElement("button")
    button.innerText = "X"
    task.append(button)

    button.addEventListener("click", function() {
      task.remove()
    })


    form.reset()
  })
});

