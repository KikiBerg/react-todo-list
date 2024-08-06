import { ReactElement } from 'react';
import { useOutletContext } from 'react-router-dom';
import { TaskBoard } from '../components';
import { ITaskContext } from '../interfaces';
import '../css/HomePage.css'

export function HomePage(): ReactElement {
  const { tasks, setTasks } = useOutletContext<ITaskContext>();

  return (
    <div>
      <h1>Todo List</h1>
      <TaskBoard tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
