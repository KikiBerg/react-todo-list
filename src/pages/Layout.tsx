import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { ITask, ITaskContext } from '../interfaces';
import { useState } from 'react';
import { Header } from '../components/Header';
import '../css/Layout.css';

export function Layout(): ReactElement {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const contextValue: ITaskContext = { tasks, setTasks };

  return (
    <div>
      <Header /> 
      <div className="content">
        <Outlet context={contextValue} />
      </div>
    </div>
  );
}
