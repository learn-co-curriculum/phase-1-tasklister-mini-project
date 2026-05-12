function elementColor() {
  let h1 = document.querySelector("h1");
  let body = document.querySelector("body");
  h1.style.color = "blue";
  body.style.background = "yellow";
}
elementColor();

function buildTaskLister(lister, priority) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "🗑️";
  li.textContent = `${lister[0].toUpperCase() + lister.slice(1)} [${priority}] `;
  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let ul = document.querySelector("#tasks");
  let ol = document.createElement("ol");
  ol.id = "tasks";
  ul.parentNode.replaceChild(ol, ul);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectE = document.querySelector("#mySelect");
    const priority = selectE.options[selectE.selectedIndex].text;
    buildTaskLister(e.target["new-task-description"].value, priority);
    form.reset();
  });
});



function buildDropDown() {
  const selectE = document.createElement("select");
  const labelE = document.createElement("label");
  labelE.textContent = "Priority";
  labelE.htmlFor = "mySelect";
  selectE.id = "mySelect";

  // i know this is repetive and i could loop the options but building it like this makes sense to me atm. 
  const option1 = document.createElement("option");
  option1.value = "option1";
  option1.textContent = "Very Important";

  const option2 = document.createElement("option");
  option2.value = "option2";
  option2.textContent = "Important";

  const option3 = document.createElement("option");
  option3.value = "option3";
  option3.textContent = "meh";

  selectE.appendChild(option1);
  selectE.appendChild(option2);
  selectE.appendChild(option3);

  const form = document.querySelector("form");
  if (!form) return;
  const inputs = form.querySelectorAll("input");
  const lastInput = inputs[1];
  if (!lastInput) {
    form.appendChild(labelE);
    form.appendChild(selectE);
    return;
  }

  const dropDownBox = document.createElement("div");
  dropDownBox.className = "inlineDropdown";
  dropDownBox.appendChild(labelE);
  dropDownBox.appendChild(selectE);

  lastInput.parentNode.insertBefore(dropDownBox, lastInput.nextSibling); //  
}

document.addEventListener("DOMContentLoaded", buildDropDown);

// add a priority value selected from a dropdown.... implement sorting functionality to display task in ascending order based on priority
