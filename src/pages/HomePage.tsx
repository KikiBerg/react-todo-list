import { ReactElement } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { TaskBoard } from '../components';
import { ITaskContext } from '../interfaces';
import '../css/HomePage.css'

export function HomePage(): ReactElement {
  const { tasks, setTasks } = useOutletContext<ITaskContext>();

  return (
    <div className="home">
      <h1>Todo List</h1>
      <TaskBoard tasks={tasks} setTasks={setTasks} />
      <div className="add-task-link">
        <p>Want to add a new task? Click the button below:</p>
        <Link to="/add" className="add-task-button">
          Add New Task
        </Link>
      </div>
    </div>
  );
}
