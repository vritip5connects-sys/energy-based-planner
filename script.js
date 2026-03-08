const tasks = [];
let currentEnergy = "low";

const taskList = document.getElementById("taskList");
const taskNameInput = document.getElementById("taskName");
const taskEnergySelect = document.getElementById("taskEnergy");
const taskTimeInput = document.getElementById("taskTime");
const addTaskButton = document.getElementById("addTaskBtn");

const suggestedTasksList = document.getElementById("suggestedTasks");

const lowEnergyBtn = document.getElementById("lowEnergy");
const mediumEnergyBtn = document.getElementById("mediumEnergy");
const highEnergyBtn = document.getElementById("highEnergy");

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task) {
        const li = document.createElement("li");

        li.textContent =
            task.name + " | " + task.energy + " | " + task.time + " mins";

        taskList.appendChild(li);
    });
}

function getSuggestedTasks() {

    const filteredTasks = tasks.filter(function(task){

        if(task.completed) return false;

        if(currentEnergy === "low"){
            return task.energy === "low";
        }

        if(currentEnergy === "medium"){
            return task.energy === "low" || task.energy === "medium";
        }

        if(currentEnergy === "high"){
            return true;
        }

    });

    filteredTasks.sort(function(a,b){
        return a.time - b.time;
    });

    return filteredTasks.slice(0,3);
}

function renderSuggestions(){

    const suggestions = getSuggestedTasks();

    suggestedTasksList.innerHTML = "";

    suggestions.forEach(function(task){

        const li = document.createElement("li");

        li.textContent =
            task.name + " | " + task.energy + " | " + task.time + " mins ";

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";

        doneBtn.addEventListener("click", function(){

            task.completed = true;

            renderSuggestions();

        });

        li.appendChild(doneBtn);

        suggestedTasksList.appendChild(li);

    });

}

addTaskButton.addEventListener("click", function () {

    const taskName = taskNameInput.value;
    const taskEnergy = taskEnergySelect.value;
    const taskTime = taskTimeInput.value;

    if(taskName === "" || taskTime === ""){
        alert("Please enter task name and time");
        return;
    }

    const task = {
        name: taskName,
        energy: taskEnergy,
        time: Number(taskTime),
        completed: false
    };

    tasks.push(task);

    taskNameInput.value = "";
    taskTimeInput.value = "";

    renderTasks();
    renderSuggestions();

});

lowEnergyBtn.addEventListener("click", function () {

    currentEnergy = "low";
    renderSuggestions();

});

mediumEnergyBtn.addEventListener("click", function () {

    currentEnergy = "medium";
    renderSuggestions();

});

highEnergyBtn.addEventListener("click", function () {

    currentEnergy = "high";
    renderSuggestions();

});