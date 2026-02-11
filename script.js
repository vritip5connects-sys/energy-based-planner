const tasks = [];

const taskList = document.getElementById("taskList");
const taskNameInput = document.getElementById("taskName");
const taskEnergySelect = document.getElementById("taskEnergy");
const taskTimeInput = document.getElementById("taskTime");
const addTaskButton = document.getElementById("addTaskBtn");

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.textContent =
        task.name + " | " + task.energy + " | " + task.time + " mins";

    taskList.appendChild(li);
    });
}

addTaskButton.addEventListener("click", function () {
    const taskName = taskNameInput.value;
    const taskEnergy = taskEnergySelect.value;
    const taskTime = taskTimeInput.value;

    const task = {
    name: taskName,
    energy: taskEnergy,
    time: Number(taskTime),
    completed: false
    };

    tasks.push(task);
    renderTasks();
});

