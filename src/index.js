document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(`form`).addEventListener("submit", (event) => {
    event.preventDefault();
    let input = document.querySelector(`input`);
    let value = input.value;
        input.value = "";
    let li = document.createElement(`li`);
        li.textContent = value;
    document.querySelector(`ul`).appendChild(li);
  })
})
