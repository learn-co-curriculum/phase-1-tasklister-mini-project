const form = document.querySelector('#create-task-form')
const submitButton = document.querySelector("#create-task-form input[type='Submit']")

const createNewTask = (e) => {
  e.preventDefault()
  const taskText = e.target['new-task-description'].value
  const taskPriority = e.target['new-task-priority'].value
  if(taskText !== '' && taskPriority !== ''){
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const btn = document.createElement('button')
    const editBtn = document.createElement('button')
    editBtn.style.marginLeft = '20px'
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', ()=>console.log('edit clicked'))
    btn.style.marginLeft = '20px'
    btn.textContent = 'Delete'
    btn.addEventListener('click', handleTaskDELETE)
    tr.className = taskPriority
    td1.textContent = taskText
    td2.appendChild(btn)
    td3.appendChild(editBtn)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    document.querySelector('#task-table').appendChild(tr)
    handleTaskPOST(taskText, taskPriority).then(data => {
      tr.id = data.id
    })
    form.reset()
  }
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
  const id = e.target.closest('tr').id
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

const handleDeleteTask = (e) => e.target.parentNode.remove()

const renderTasks = (body) => {
  body.forEach(item => {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const btn = document.createElement('button')
    const editBtn = document.createElement('button')
    editBtn.style.marginLeft = '20px'
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', () => console.log('edit clicked'))
    btn.style.marginLeft = '20px'
    btn.textContent = 'Delete'
    btn.addEventListener('click', handleTaskDELETE)
    tr.id = item.id
    tr.className = item.priority
    td1.textContent = item.task
    td2.appendChild(btn)
    td3.appendChild(editBtn)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
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
