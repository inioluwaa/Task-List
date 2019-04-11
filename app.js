// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }
  else {
    // Create li elements
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);

    // Append ul to li
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
  }
}

// Remove Task
function RemoveTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Alternate method
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
  (function (task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    }
    else {
      task.style.display = 'none';
    }
  });
}

// Load all event listeners
function loadEventListeners() {
  // Add task form
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', RemoveTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter task event
  filter.addEventListener('keyup', filterTasks);
}

// Load all event listeners
loadEventListeners();

