document.addEventListener("DOMContentLoaded", () => {
  //grabs all the necessary DOM elements.

  //set the taskForm to a variable.
  const newTaskForm = document.querySelector('form')

  //attach a submit event listener to taskForm.
  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //create a variable called toDo holds the value of the targeted input.
    const toDo = e.target.newtaskdescription.value

    //pass in the toDo variable as an argument to buildToDo. 
    buildToDo(toDo);

    //after buildToDo function runs, we then reset the form so the input is empty
    form.reset()
  })
});
