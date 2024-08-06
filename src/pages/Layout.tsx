import { ReactElement } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ITask, ITaskContext } from '../interfaces';
import { useState } from 'react';

export function Layout(): ReactElement {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const contextValue: ITaskContext = { tasks, setTasks };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Task</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Outlet context={contextValue} />
    </div>
  );
}
