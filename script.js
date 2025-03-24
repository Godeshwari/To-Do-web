// Add task when "Enter" key is pressed
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task list item
    let li = document.createElement("li");

    // Create task text span
    let span = document.createElement("span");
    span.textContent = taskInput.value;
    span.addEventListener("click", function() {
        this.classList.toggle("completed");
    });

    // Create delete button
    let button = document.createElement("button");
    button.textContent = "X";
    button.classList.add("delete-btn");
    button.onclick = function() {
        li.remove();
    };

    // Append elements to li
    li.appendChild(span);
    li.appendChild(button);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

