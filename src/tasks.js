class Tasks {
  createTask(newTask) {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const color = document.getElementById("color").value;

    if (this.addTasks === null) {
      this.addTasks.push(newTask);
    }

    return (this.addTasks = []);
  }

  showTask(task) {
    const element = document.createElement("div");
    const taskUi = document.getElementById("task-ui");

    element.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${task.name}</h5>
          <p class="card-text">${task.description}</p>
          <p>${task.date}</p>
          <p><strong>${task.color}</strong></p>

          <button class="btn btn-danger mt-2" name="delete">Eliminar</button>

          <button class="btn btn-success" id="completedTask">Completada/Incompleta</button>

        </div>
      </div>
    `;

    taskUi.appendChild(element);
  }

  clearInputs() {
    const name = (document.getElementById("name").value = "");
    const date = (document.getElementById("date").value = "");
    const description = (document.getElementById("description").value = "");
    const color = (document.getElementById("color").value = "");
  }

  deleteTask(element) {
    const taskUi = document.getElementById("task-ui");

    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
    }
  }

  taskComplete() {
    this.isCompleted = !this.isCompleted;
  }
}

export default Tasks;
