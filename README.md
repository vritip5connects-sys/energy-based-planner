# energy-based-planner

# this app helps people perform their tasks based on their energy levels in their day to their lifes.

# i am builidng this app to learn how to solve real world problems by finding solutions



## Problem Definition

### Who is this app for?
- Students
- Working professionals
- Anyone who struggles with managing tasks due to low or fluctuating energy

### What problem are they facing?
- Tasks remain incomplete because the first tasks they pick do not match their current energy level

### What is the main action this app helps with?
- Helping users choose tasks based on both available time and current energy level

### What should happen when energy is low?
- Only low-energy tasks should be suggested, or the app should recommend taking a short break

## Wireframe Notes
- The app has a single main screen
- Users first add tasks with required energy and time
- Users select their current energy level
- The app suggests up to three suitable tasks
- When energy is low, only low-effort tasks are shown

## Data Model
### Task
- name (string)
- energyRequired (low | medium | high)
- timeRequired (number)
- completed (boolean)

### User State
- currentEnergy (low | medium | high)

## Logic Rules
### Rule 1: Adding a task
- When the user clicks the "Add Task" button, a new task is created using:
  - the task name entered by the user
  - the selected energy level
  - the selected time duration
- The new task is added to the list of tasks
- The task is marked as not completed by default

### Rule 2: Selecting current energy
- When the user selects a current energy level (low, medium, or high):
  - The selected value is stored as the current energy state
  - The list of suggested tasks is updated based on the selected energy level

### Rule 3: Suggesting tasks
- Only tasks that are not marked as completed are considered
- Tasks are filtered based on the selected current energy level:
  - Low energy → show only low-energy tasks
  - Medium energy → show medium and low-energy tasks
  - High energy → show only high-energy tasks
- The filtered tasks are sorted from least time required to most time required
- A maximum of three tasks are shown as suggestions

### Rule 4: Marking a task as done
- When a user marks a task as completed:
  - The task's completed status is updated
  - The task is removed from the suggested task list


 

