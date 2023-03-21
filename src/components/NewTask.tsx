import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';
import { ChangeEvent, InvalidEvent, useState } from 'react';
import { TaskElement } from './Task';

interface NewTaskProps {
  onAddButton: (newTask: TaskElement) => void;
}

export function NewTask({ onAddButton }: NewTaskProps) {
  const [description, setDescription] = useState('');

  const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');
    setDescription(event.target.value);
  };

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  };

  const handleClick = () => {
    const task = { description, done: false, id: uuidv4() };

    onAddButton(task);
    setDescription('');
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.newTaskInput}
        placeholder='Adicione uma nova tarefa'
        onChange={handleTaskNameChange}
        value={description}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button
        className={styles.newTaskButton}
        onClick={handleClick}
        disabled={description.length === 0}
      >
        Criar <PlusCircle />
      </button>
    </div>
  );
}
