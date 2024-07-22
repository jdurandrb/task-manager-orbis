// src/utils/logger.ts

import { Task } from '../models/Task';

export const logTasks = (tasks: Task[]): void => {
  console.log('Completed Tasks:');
  tasks.filter(task => task.completed).forEach(task => console.log(task));

  console.log('Incomplete Tasks:');
  tasks.filter(task => !task.completed).forEach(task => console.log(task));
};
