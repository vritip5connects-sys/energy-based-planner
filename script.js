const taskNameInput = document.getElementById("taskName");
const taskEnergySelect = document.getElementById("taskEnergy");
const taskTimeInput = document.getElementById("taskTime");
const addTaskButton = document.getElementById("addTaskBtn");



// Listen for button click
addTaskButton.addEventListener("click", function () {

    const taskName = taskNameInput.value;
    const taskEnergy = taskEnergySelect.value;
    const taskTime = taskTimeInput.value;

    console.log("Task Name:", taskName);
    console.log("Energy Required:", taskEnergy);
    console.log("Time Required (minutes):", taskTime);
});
