import { ReactElement, useState } from 'react';
import { ITask, ITaskBoardProps } from '../pages/interfaces';
import { TaskForm } from './TaskForm';
import { TaskItem } from './TaskItem';

export function TaskBoard(props: ITaskBoardProps): ReactElement {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (text: string, author: string) => {
    const newTask: ITask = {
      id: Date.now(),
      text,
      completed: false,
      timestamp: new Date(),
      author,
    };

    setTasks([...tasks, newTask]);
  };

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
      <TaskForm onAddTask={addTask} />
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
