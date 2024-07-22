import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../models/Task';

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
