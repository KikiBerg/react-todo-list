import { ReactElement } from 'react';
import { ITaskContext } from '../interfaces';
import { TaskItem } from './TaskItem';
import '../css/TaskBoard.css';

export function TaskBoard({ tasks, setTasks }: ITaskContext): ReactElement {
  const toggleCompletedTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-board">
      <h1>Task Board</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={toggleCompletedTask}
            onRemove={removeTask}
          />
        ))}
      </div>
    </div>
  );
}
