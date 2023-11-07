document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("todo-heading");

    // get todays date and day name
    const today = new Date();
    // const options = {year: 'numeric', month: 'long', day: 'numeric'};
    // // const formattedDate = today.toLocaleDateString(undefined, options);

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //get the current day name
    const dayName = dayNames[today.getDay()];

    // updating the heading with current day name
    heading.innerText = `TODO - ${dayName}`;
})



function addTask() {
    const taskInput = document.getElementById("taskInput");
    const category = document.getElementById("category");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create a new list item
    const listItem = document.createElement("li");

    // Create a category element
    const taskCategory = document.createElement("select");
    taskCategory.disabled = true;
    taskCategory.innerHTML = category.innerHTML;
    taskCategory.value = category.value;

    // Create a task text element
    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerText = "DELETE";
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    // Append elements to the list item
    listItem.appendChild(taskCategory);
    listItem.appendChild(taskTextElement);
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

// Attach the addTask function to the "Add Task" button
document.getElementById("addTask").addEventListener("click", addTask);
