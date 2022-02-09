document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('form');
  //console.log(form);
  form.addEventListener('submit', function(event){
  event.preventDefault();
  let description = document.getElementById("new-task-description").value;
  
  // let ul = document.getElementById("tasks");
  // console.log(ul);
  // ul.appendChild(description);
  //let div = document.createElement("div")
  let div = document.getElementById("list");
  let p = document.createElement("p")
  div.append(p)
  p.innerText = description
  //console.log(div);
  
})

});

