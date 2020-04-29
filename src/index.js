import "./styles.css";

import Task from "./task";
import Tasks from "./tasks";

document.getElementById("task-done").addEventListener("click", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const color = document.getElementById("color").value;

  if (name === "" || date === "" || description === "" || color === "") {
    alert("Deberias de completar los campos");

    return;
  }

  if (description.length >= 120) {
    alert("No deberias de escribir más de 120 caracteres");

    return;
  }

  const taskController = new Task(name, date, description, color);
  const TaskInterface = new Tasks();

  TaskInterface.createTask(taskController);
  TaskInterface.showTask(taskController);
  TaskInterface.clearInputs();

  const taskUi = document.getElementById("task-ui");

  taskUi.addEventListener("click", e => {
    e.preventDefault();

    const TaskInterface = new Tasks();
    TaskInterface.deleteTask(e.target);
  });

  const completed = document.getElementById("completedTask");

  completed.addEventListener("click", e => {
    TaskInterface.taskComplete(e.target);

    completed.style.backgroundColor = "red";
    completed.textContent = "Tarea completada";

    e.preventDefault();
  });
});
