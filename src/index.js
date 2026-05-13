document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let dropdDown = document.createElement('select')
  dropdDown.id = "prioritySelector"
  const addSelectOpt = (priority) => {
    let newOption = document.createElement('option')
    newOption.value = priority.toLowerCase()
    newOption.textContent = priority
    dropdDown.appendChild(newOption)
  }
  for(let i = 0; i < 3; i++) {
    switch(i) {
      case 0: 
        addSelectOpt("Low")
        dropdDown.children[0].setAttribute('selected', '')
        break;
      case 1:
        addSelectOpt("Medium")
        break;
      case 2:
        addSelectOpt("High")
        break;
    }
  }

  document.querySelector('form').insertBefore(dropdDown, document.querySelector('form').children[2])
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    addTODO(e.target.elements['new-task-description'].value, e.target.elements.prioritySelector.value)
    e.target.reset()
    const parent = document.getElementById("tasks");
    const sortedItems = [...parent.children].sort((a, b) => a.id.localeCompare(b.id));
    console.log(sortedItems);
    
    parent.replaceChildren(...sortedItems);
  })
  
  console.log(document.getElementById('tasks'))
});

function addTODO(todo, prio) {
  let li = document.createElement('li')
  let deleteBtn = document.createElement('button')
  let editBtn = document.createElement('button')
  switch(prio) {
    case 'low':
      li.style.color = "green"
      li.id = 'zzz'
      break;
    case 'medium':
      li.style.color = "#ffc800"
      li.id = 'yyy'
      break;
    case 'high':
      li.style.color = "red"
      li.id = 'xxx'
      break;
  }
  li.textContent = todo + " "
  deleteBtn.textContent = "X"
  deleteBtn.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
  editBtn.textContent = "Edit"
  editBtn.addEventListener('click', (e) => {
    // thinking about edit btn is making my brain hurt. may come back to this later after doing some of the other coursework
  })
  li.appendChild(deleteBtn)
  document.getElementById('tasks').appendChild(li)

  const parent = document.getElementById('tasks');
  const sortedItems = [...parent.children].sort((a, b) => a.id - b.id);

  // Clears existing and inserts new order instantly
  parent.replaceChildren(...sortedItems);

}