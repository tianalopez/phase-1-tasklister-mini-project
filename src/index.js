// Grab relevant items
const newTaskDescription = document.getElementById('new-task-description');
// you can also reference this by saying e.target['new-task-description']
const createTaskForm = document.querySelector('#create-task-form');
const newTask = document.querySelector('#tasks');
const priorityOptions = document.querySelector('#priority');

// Function that adds new task
function addTask() {
  let newLi = document.createElement('li');
  let newButton = document.createElement('button');
  newButton.addEventListener('click', removeTask);
  newButton.textContent = "X";

  //determine priority
  const priority = priorityOptions.value //"low", "medium", "high"
  if (priority === "low") {
    newLi.style.backgroundColor = "green";
  }
  else if (priority === "medium") {
    newLi.style.backgroundColor = "yellow";
  }
  else {
    newLi.style.backgroundColor = "red";
  }

  newLi.textContent = newTaskDescription.value; // use e.target['new-task-description'].value
  newLi.appendChild(newButton);
  newTask.appendChild(newLi);

}
addTask()

//Delete all tasks
// newLi.innerHTML = ""

// Delete task
function removeTask(e) {
  e.target.parentNode.remove();
}

// Function that submits
function logSubmit(event) {
  event.preventDefault();
  addTask();
  event.target.reset();
}

// function that registers the submit
document.addEventListener("DOMContentLoaded", () => {
  createTaskForm.addEventListener('submit', logSubmit)
  })

// function that lets you delete
