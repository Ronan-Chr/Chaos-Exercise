// TaskFlow - Team Task Management System
// Starter code for the Chaos Exercise
// TODO this is how tasks created mark who created said task an entry prompt when opening asking a user to declare who they are
const currentUser= (prompt("Name of User Accesing Task Management System?") || " ").trim();
//If a user doesnt enter something it initializes to no user
// Sample task data to show the structure
let tasks = [
    {
        id: 1,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "2025-10-15",
        assignedTo: "",
        completed: false
    }
];

// Function for adding a task to the dashboard
function NewTask() { 
    const title = prompt("Name of Task:");
//canceling the entry returns null
    if (!title || !title.trim()) return;

    const description = prompt("Description of Task:");
    if (description == null) return;

    const dueDate = prompt("Deadline of Task: (YYYY-MM-DD)");
    if (dueDate == null) return;

    const newTask = {
        id: tasks.length + 1,
        title: title.trim(),
        description: description.trim(),
        dueDate: dueDate.trim(),
        assignedTo: currentUser,
        completed: false
    };
    tasks.push(newTask);
    renderTasks();
}

// Function to render all tasks to the page
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'card task-item';
        
        const deadline = new Date(task.dueDate + "T23:59:59:999");
        if (!task.completed && new Date() > deadline) {
            taskItem.classList.add("task-overdue");
        }

        taskItem.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="task-content">
                        <div class="task-title">${task.title}</div>
                        <div class="task-description">${task.description}</div>
                        <div class="task-date">Due: ${task.dueDate}</div>
                        ${task.assignedTo ? `<div class="task-date">Assigned to: ${task.assignedTo}</div>` : ''}
                    </div>
                    <div class="task-actions">
                        <!-- TODO -->
                    </div>
                </div>
            </div>
        `;
        
        taskList.appendChild(taskItem);
    });
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderTasks();
    
    // TODO
    const NewTaskButton= document.getElementById("NewTaskButton");
    NewTaskButton.addEventListener("click", NewTask);
});