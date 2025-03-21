document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form"); // select the form element to help collect data from the user
  let tasklist = document.querySelector("#tasks"); // select the ul element

  form.addEventListener("submit", function (event) {
    // add an event listener to the form
    event.preventDefault(); // prevent the default action of the form from happening

    let task = document.createElement("li"); // create a new list HTML element (li)
    let input = document.getElementById("new-task-description"); //
    task.textContent = input.value;
    // task.innerText = event.target[0].value; // Add text directly to <li>

    let deleteButton = document.createElement("button"); // create a new button element
    deleteButton.innerText = "X"; // set the text of the button to "X"
    deleteButton.addEventListener("click", () => {
      // add an event listener to the button
      task.remove(); // Remove task on button click
      console.log("deleted");
    });

    task.appendChild(deleteButton); // append the button to the div
    tasklist.appendChild(task); // display the list item on the page under the ul

    event.target.reset(); // clear the input field after the task is submitted
  });
});
