document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const form = document.getElementById('guest-form');
const guestList = document.getElementById('guest-list');
const nameInput = document.getElementById('guest-name');
const maxGuests = 10;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (guestList.children.length >= maxGuests) {
    alert("Guest limit reached (10 guests max).");
    return;
  }

  const guestName = nameInput.value.trim();
  if (guestName === "") return;

  const li = document.createElement('li');
  const timestamp = new Date().toLocaleTimeString();

  li.innerHTML = `
    <span>
      <strong>${guestName}</strong> <small>(${timestamp})</small>
    </span>
    <div>
      <button class="toggle-btn">Attending</button>
      <button class="delete-btn">Remove</button>
    </div>
  `;

  guestList.appendChild(li);
  nameInput.value = "";

  // Toggle RSVP
  li.querySelector('.toggle-btn').addEventListener('click', function () {
    this.textContent = this.textContent === 'Attending' ? 'Not Attending' : 'Attending';
    this.style.backgroundColor = this.textContent === 'Attending' ? 'lightgreen' : 'salmon';
  });

  // Delete guest
  li.querySelector('.delete-btn').addEventListener('click', function () {
    li.remove();
  });
});

