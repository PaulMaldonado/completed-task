class Task {
  constructor(name, date, description, color) {
    this.name = name;
    this.date = new Date();
    this.description = description;
    this.color = color;
    this.isCompleted = false;

    this.addTasks = [];
  }
}

export default Task;
