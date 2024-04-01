function addTask(){
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      var taskList = document.getElementById("task-list");
      var li = document.createElement("li");
      li.textContent = taskText;
  
      var deleteBtn = document.createElement("span");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = "&#x2716;";
      deleteBtn.onclick = function () {
        li.remove();
      };
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      taskInput.value = "";
    }
  }
  
  var taskList = document.getElementById("task-list");
  taskList.addEventListener("click", function (event) {
    var target = event.target;
    if (target.tagName === "LI") {
      target.classList.toggle("completed");
      updateTaskStatus(target);
    }
  });
  
  function updateTaskStatus(task) {
    var symbol = task.querySelector(".task-status");
    if (task.classList.contains("completed")) {
      if (!symbol) {
        symbol = document.createElement("span");
        symbol.className = "task-status";
        symbol.innerHTML = "&#x2714;";
        task.insertBefore(symbol, task.firstChild);
      }
    } else {
      if (symbol) {
        symbol.remove();
      }
    }
  }
  