const form = document.querySelector('#create-task-form')
const submitButton = document.querySelector("#create-task-form input[type='submit']")

const createNewTask = (e) => {
  e.preventDefault()
  const taskText = e.target['new-task-description'].value
  const taskPriority = e.target['new-task-priority'].value
  if(taskText !== '' && taskPriority !== ''){
    handleTaskPOST(taskText, taskPriority)
    .then(data => {
      const editBtn = createEditButton(data.id);
      const deleteBtn = createDeleteButton(data.id)
      tr = createRow(data.id, taskText, taskPriority, deleteBtn, editBtn)
      document.querySelector('#task-table').appendChild(tr)
      document.querySelector("#new-task-description").value = ''
      document.querySelector("#task-priority").value = ''
    })
    .catch(error => {
      console.log(error)
    })
  }
}

const createRow = (id, taskText, taskPriority, deleteBtn, editBtn) => {
  const tr = document.createElement('tr')
  tr.id = id
  tr.className = taskPriority
  const td1 = document.createElement('td')
  td1.textContent = taskText
  const td2 = document.createElement('td')
  td2.appendChild(deleteBtn)
  const td3 = document.createElement('td')
  td3.appendChild(editBtn)
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  return tr
}

//Create edit button and return
const createEditButton = (id) => {
  const editBtn = document.createElement('button')
  editBtn.style.marginLeft = '20px'
  editBtn.textContent = 'Edit'
  editBtn.className = 'btn'
  editBtn.setAttribute('task-id',id)
  editBtn.addEventListener('click', editTask)
  return editBtn
}

const createDeleteButton = (id) => {
  const btn = document.createElement('button')
  btn.style.marginLeft = '20px'
  btn.textContent = 'Delete'
  btn.className = 'btn'
  btn.addEventListener('click', handleTaskDELETE)
  btn.setAttribute('task-id',id)
  return btn
}


const handleTaskPOST = (taskText, taskPriority) => {
  return fetch('http://localhost:3000/tasks',{
    method: "POST",
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      task: taskText,
      priority: taskPriority
    })
  })
  .then(res => res.json())
  .then(data => data)
  .catch(error => {
    alert('Ooops, something went wrong when trying to write data to the server')
    console.log(error)
  })
}

const handleTaskDELETE = (e) => {
  const id = e.target.attributes['task-id'].value
  const task = e.target.closest('tr').firstChild.textContent
  fetch(`http://localhost:3000/tasks/${id}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(data => {
    e.target.closest('tr').remove()
  })
  .catch(error => {
    alert(`Ooops, something went wrong when trying to delete task: ${task}`)
    console.log(error)
  })
}

const handleTaskPATCH = (e) => {
  e.preventDefault()
  const taskText = e.target['new-task-description'].value
  const taskPriority = e.target['new-task-priority'].value
  id = submitButton.attributes['task-id'].value
  fetch(`http://localhost:3000/tasks/${id}`,{
    method: "PATCH",
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      task: taskText,
      priority: taskPriority
    })
  })
  .then(res => res.json())
  .then(data => {
    document.querySelector("#new-task-description").value = ''
    document.querySelector("#task-priority").value = ''
    submitButton.className = 'btn'
    submitButton.removeAttribute('task-id')
    submitButton.value = 'Create New Task'
    form.removeEventListener('submit', handleTaskPATCH)
    form.addEventListener('submit',createNewTask)
    document.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
    initApp();
  })
  .catch(error => {
    alert(`Something went wrong while trying to update task: ${taskText}`)
  console.log(error)
  })
}

const editTask = (e) => {
  const task = e.target.closest('tr').firstChild.textContent
  const priority = e.target.closest('tr').className
  const id = e.target.attributes['task-id'].value
  document.querySelector("#new-task-description").value = task
  document.querySelector("#task-priority").value = priority
  submitButton.className = 'editBtn'
  submitButton.value = 'Edit Task'
  submitButton.setAttribute('task-id',id)
  form.removeEventListener('submit', createNewTask)
  form.addEventListener('submit',handleTaskPATCH)
}

const renderTasks = (body) => {
  document.querySelector("#new-task-description").value = ''
  document.querySelector("#task-priority").value = ''
  document.querySelectorAll('tr').forEach(tr => console.log(tr))
  body.forEach(item => {
    const editBtn = createEditButton(item.id)
    const deleteBtn = createDeleteButton(item.id)
    tr = createRow(item.id, item.task, item.priority, deleteBtn, editBtn)
    document.querySelector('#task-table').appendChild(tr)
  })
}

const initApp = () => {
  fetch('http://localhost:3000/tasks')
  .then(res => res.json())
  .then(body => renderTasks(body))
  .catch(error => {
    alert('Ooops, looks like something went wrong when trying to retrieve tasks from db.json')
    console.log(error)
  })
}

form.addEventListener('submit', createNewTask)
document.addEventListener('DOMContentLoaded', initApp)
