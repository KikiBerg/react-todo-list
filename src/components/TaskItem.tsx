import { ReactElement } from 'react';
import { ITask } from '../pages/interfaces';

interface ITaskItemProps {
  task: ITask;
  onToggleComplete: (id: number) => void;
  onRemove: (id: number) => void;
}

export function TaskItem(props: ITaskItemProps): ReactElement {
  const { task, onToggleComplete, onRemove } = props;

  const handleToggleComplete = () => {
    onToggleComplete(task.id);
  };

  const handleRemove = () => {
    onRemove(task.id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
      />
      <span>{task.text}</span>
      <span className="author">{task.author}</span>
      <span className="timestamp">{task.timestamp.toLocaleString()}</span>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
