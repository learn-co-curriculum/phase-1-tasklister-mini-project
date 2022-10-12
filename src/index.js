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

  //when user submits, we pass in the targeted input into buildToDo function
  function buildToDo(toDo){
    //first, the buildToDo function creates an li element and a button element. 
    let li = document.createElement('li');
    let btn = document.createElement('button')

    //next, we set the textContent of the btn element to 'x'.
    btn.textContent = 'x'

    //after, we set the textContent of the li element to the todo parameter.
    //remember, when we submit, we are passing in targeted input into the parameters. 
    li.textContent = `${toDo}`

    //next, we set the text content for the li and button element, we then append the new btn to the li.
    li.appendChild(btn);

    //then, we added the li element to the ul element with id of tasks
    document.querySelector('#tasks').appendChild(li);
  
  
    //finally, we attached a click event listener to the btn which invokes the handleDelete function
    btn.addEventListener('click', handleDelete)
  }