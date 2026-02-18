const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addBtn');
const taskList = document.getElementById('tasklist');

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span class="taskText">${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    listItem.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') return;

        listItem.classList.toggle('completed');
    });

    const deleteBtn = listItem.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);

    taskInput.value = '';
}