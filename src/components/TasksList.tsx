import { Badges } from './Badges';
import styles from './TasksList.module.css';
import empty from '../assets/Clipboard.svg';
import { Task, TaskElement } from './Task';

interface TasksListProps {
  tasks: TaskElement[];
  onRemoveButton: (taskToRemove: TaskElement) => void;
  onCheckButton: (taskToCheck: TaskElement) => void;
}

export function TasksList({ tasks, ...rest }: TasksListProps) {
  const checkedTasks = tasks.reduce((acc, task) => {
    return acc + (task.done ? 1 : 0);
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.counters}>
        <Badges amount={`${tasks.length}`} title={'Tarefas criadas'} />
        <Badges
          amount={tasks.length > 0 ? `${checkedTasks} de ${tasks.length}` : '0'}
          title={'Concluídas'}
        />
      </div>
      <div className={styles.tasks}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              done={task.done}
              {...rest}
            />
          ))
        ) : (
          <div className={styles.empty}>
            <img src={empty} alt='icone de lista vazia' />
            <div className={styles.emptyListTextBox}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
