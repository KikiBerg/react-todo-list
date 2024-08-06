import { ReactElement } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { TaskForm } from '../components';
import { ITask, ITaskContext } from '../interfaces';

export function AddTaskPage(): ReactElement {
  const { tasks, setTasks } = useOutletContext<ITaskContext>();
  const navigate = useNavigate();

  const handleAddTask = (text: string, author: string) => {
    const newTask: ITask = {
      id: Date.now(),
      text,
      completed: false,
      timestamp: new Date(),
      author,
    };
    setTasks([...tasks, newTask]);
    navigate('/');
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
}
