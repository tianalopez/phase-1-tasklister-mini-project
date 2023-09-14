// Grab relevant items
const newTaskDescription = document.getElementById('new-task-description');
const createTaskForm = document.querySelector('#create-task-form');
const newTask = document.querySelector('#tasks');

// Function that adds new task
function addTask() {
  let newLi = document.createElement('li');
  let newButton = document.createElement('button');
  newButton.addEventListener('click', removeTask);
  newButton.textContent = "X";
  newLi.textContent = newTaskDescription.value;
  newLi.appendChild(newButton);
  newTask.appendChild(newLi);
}

// Delete task
function removeTask(e) {
  e.target.parentNode.remove();
}

// Function that submits
function logSubmit(event) {
  event.preventDefault();
  addTask();
}

// function that registers the submit
document.addEventListener("DOMContentLoaded", () => {
  createTaskForm.addEventListener('submit', logSubmit)
  })

// function that lets you delete
