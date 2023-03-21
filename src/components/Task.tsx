import styles from './Task.module.css';

import eu from '../assets/trash.svg';
import checkTrue from '../assets/check-true.svg';
import checkFalse from '../assets/check-false.svg';

export interface TaskElement {
  id: string;
  description: string;
  done: boolean;
}

interface TaskProps extends TaskElement {
  onRemoveButton: (taskToRemove: TaskElement) => void;
  onCheckButton: (taskToCheck: TaskElement) => void;
}

export function Task({
  id,
  description,
  done,
  onRemoveButton,
  onCheckButton,
}: TaskProps) {
  const currentTask = {
    id,
    description,
    done,
  };

  const handleClickRemoveButton = () => {
    onRemoveButton(currentTask);
  };

  const handleClickCheckButton = () => {
    onCheckButton(currentTask);
  };

  return (
    <div className={styles.container}>
      <button className={styles.checkIcon} onClick={handleClickCheckButton}>
        {done ? (
          <img src={checkTrue} alt='selecionado' />
        ) : (
          <img src={checkFalse} alt='não selecionado' />
        )}
      </button>
      <span className={done ? styles.descriptionChecked : styles.description}>
        {description}
      </span>
      <button className={styles.iconButton} onClick={handleClickRemoveButton}>
        <img src={eu} alt='lixo' />
      </button>
    </div>
  );
}
