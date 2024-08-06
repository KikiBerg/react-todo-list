import { ReactElement } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ITaskContext } from '../interfaces';
import '../css/AboutPage.css'

export function AboutPage(): ReactElement {
  const { tasks } = useOutletContext<ITaskContext>();

  return (
    <div>
      <h1>About Our Todo List</h1>
      <p>This todo list application helps you manage your tasks efficiently.</p>
      <p>Current number of tasks: {tasks.length}</p>
    </div>
  );
}
