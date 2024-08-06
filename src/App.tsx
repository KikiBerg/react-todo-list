import { ReactElement } from 'react';
import { TaskBoard } from './components';
import './css/App.css';

export function App():ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List Application</h1>
      </header>
      <main>
        <TaskBoard />
      </main>
    </div>
  );
}
