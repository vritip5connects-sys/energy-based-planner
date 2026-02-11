const tasks = [];


const taskNameInput = document.getElementById("taskName");
const taskEnergySelect = document.getElementById("taskEnergy");
const taskTimeInput = document.getElementById("taskTime");
const addTaskButton = document.getElementById("addTaskBtn");



// Listen for button click
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
console.log("All tasks:", tasks);


});
