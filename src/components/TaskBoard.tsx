import { ReactElement, useState } from 'react';
import { ITask, ITaskContext } from '../interfaces';
import { TaskItem } from './TaskItem';
import { EditTaskModal } from './EditTaskModal';
import { SortTasks } from './SortTasks';
import '../css/TaskBoard.css';

export function TaskBoard({ tasks, setTasks }: ITaskContext): ReactElement {
  const [editingTask, setEditingTask] = useState<ITask | null>(null);

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

  const editTask = (id: number, newText: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const moveTask = (id: number, direction: 'up' | 'down') => {
    const index = tasks.findIndex((task) => task.id === id);
    if (
      (direction === 'up' && index > 0) ||
      (direction === 'down' && index < tasks.length - 1)
    ) {
      const newTasks = [...tasks];
      const [movedTask] = newTasks.splice(index, 1);
      newTasks.splice(direction === 'up' ? index - 1 : index + 1, 0, movedTask);
      setTasks(newTasks);
    }
  };

  const sortTasks = (criteria: 'timestamp' | 'author') => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (criteria === 'timestamp') {
        return b.timestamp.getTime() - a.timestamp.getTime();
      } else {
        return a.author.localeCompare(b.author);
      }
    });
    setTasks(sortedTasks);
  };

  return (
    <div className="task-board">
      <SortTasks onSort={sortTasks} />
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={toggleCompletedTask}
            onRemove={removeTask}
            onEdit={(id) =>
              setEditingTask(tasks.find((t) => t.id === id) || null)
            }
            onMoveUp={(id) => moveTask(id, 'up')}
            onMoveDown={(id) => moveTask(id, 'down')}
          />
        ))}
      </div>
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={editTask}
        />
      )}
    </div>
  );
}
