import { ReactElement } from 'react';
import { useOutletContext } from 'react-router-dom';
import { TaskBoard } from '../components';
import { ITask } from '../interfaces';

interface IContextType {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function HomePage(): ReactElement {
  const { tasks, setTasks } = useOutletContext<IContextType>();

  return (
    <div>
      <h1>Todo List</h1>
      <TaskBoard tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
