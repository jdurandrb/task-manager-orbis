import { Task } from '../models/Task';

export class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(title: string): Task {
    const newTask: Task = { id: this.nextId++, title, completed: false };
    this.tasks.push(newTask);
    return newTask;
  }

  removeTask(id: number): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) {
      throw new Error(`Task with id ${id} not found`);
    }
    this.tasks.splice(index, 1);
  }

  completeTask(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    task.completed = true;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getCompletedTasks(): Task[] {
    return this.tasks.filter(task => task.completed);
  }

  getIncompleteTasks(): Task[] {
    return this.tasks.filter(task => !task.completed);
  }
}
