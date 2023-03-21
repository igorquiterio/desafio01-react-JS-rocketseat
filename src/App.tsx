import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import './global.css';
import styles from './App.module.css';
import { TasksList } from './components/TasksList';
import { TaskElement } from './components/Task';

function App() {
  const [tasks, setTasks] = useState<TaskElement[]>([]);

  const handleAddButton = (newTask: TaskElement) => {
    setTasks([...tasks, newTask]);
  };

  const handleRemoveButton = (taskToRemove: TaskElement) => {
    const newTaskList = tasks.filter((task) => task.id !== taskToRemove.id);

    setTasks(newTaskList);
  };

  const handleCheckButton = (taskToChange: TaskElement) => {
    const taskChanged = { ...taskToChange, done: !taskToChange.done };

    const newTaskList = tasks.map((task) =>
      task.id === taskToChange.id ? taskChanged : task
    );

    setTasks(newTaskList);
  };

  return (
    <div className='App'>
      <Header />
      <div className={styles.wrapper}>
        <NewTask onAddButton={handleAddButton} />
        <TasksList
          tasks={tasks}
          onRemoveButton={handleRemoveButton}
          onCheckButton={handleCheckButton}
        />
      </div>
    </div>
  );
}

export default App;
