      function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value;
            if (taskText === "") return;
            
            let li = document.createElement("li");
            li.textContent = taskText;
            li.onclick = function () {
                this.remove(); // Remove task on click
            };
            
            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }

