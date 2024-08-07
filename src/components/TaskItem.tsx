import { ReactElement } from 'react';
import { ITaskItemProps } from '../interfaces';
import '../css/TaskItem.css';

export function TaskItem(props: ITaskItemProps): ReactElement {
  const { task, onToggleComplete, onRemove, onEdit, onMoveUp, onMoveDown } =
    props;

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <div className="task-details">
          <p className="task-text">{task.text}</p>
          <div className="task-meta">
            <span className="author">{task.author}</span>
            <span className="timestamp">{task.timestamp.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task.id, task.text)}>Edit</button>
        <button onClick={() => onRemove(task.id)}>Remove</button>
        <button onClick={() => onMoveUp(task.id)}>↑</button>
        <button onClick={() => onMoveDown(task.id)}>↓</button>
      </div>
    </div>
  );
}
