document.addEventListener("DOMContentLoaded", () => {
  //grabs all the necessary DOM elements.

  //set the taskForm to a variable.
  const newTaskForm = document.querySelector('form')

  //attach a submit event listener to taskForm.
  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //create a variable called toDo holds the value of the targeted input.
    const newToDo = e.target.newtaskdescription.value

    //pass in the toDo variable as an argument to buildToDo. 
    buildToDo(newToDo);

    //after buildToDo function runs, we then reset the newTaskForm so the input is empty
    newTaskForm.reset()
  })
});

  //when user submits, we pass in the targeted input into buildToDo function
  function buildToDo(newToDo){
    //first, the buildToDo function creates an li element and a button element. 
    let taskLi = document.createElement('li');
    let deleteButton = document.createElement('button')

    //next, we set the textContent of the btn element to 'x'.
    deleteButton.textContent = 'x'

    //after, we set the textContent of the li element to the todo parameter.
    //remember, when we submit, we are passing in targeted input into the parameters. 
    taskLi.textContent = `${newToDo}`

    //next, we set the text content for the li and button element, we then append the new btn to the li.
    taskLi.appendChild(deleteButton);

    //then, we added the li element to the ul element with id of tasks
    document.querySelector('#tasks').appendChild(taskLi);
  
  
    //finally, we attached a click event listener to the btn which invokes the handleDelete function
    deleteButton.addEventListener('click', handleDelete)
  }

  //when the button element with the textContent of 'x' is clicked, this function will run.
  function handleDelete(e){
    //this function targets the parent node of the button and removes it.
    //in this case, the parentNode of the button element is the li element. Which means that the li will then be removed form list.
    e.target.parentNode.remove();
  }