import React, { useState } from 'react';
import TaskList from './components/TaskList';
import { TaskManager } from './services/TaskManager';
import { Task } from './models/Task';
import './styles/App.css';

const taskManager = new TaskManager();

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(taskManager.getAllTasks());
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const handleAddTask = () => {
    if(newTaskTitle.length > 0) {
      taskManager.addTask(newTaskTitle);
      setTasks([...taskManager.getAllTasks()]); // Crear un nuevo array
      setNewTaskTitle('');
    }
  };

  const handleCompleteTask = (id: number) => {
    taskManager.completeTask(id);
    setTasks([...taskManager.getAllTasks()]); // Crear un nuevo array
  };

  const handleDeleteTask = (id: number) => {
    taskManager.removeTask(id);
    setTasks([...taskManager.getAllTasks()]); // Crear un nuevo array
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="New task title"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <TaskList tasks={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
