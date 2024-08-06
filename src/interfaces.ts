export interface ITask {
  id: number;
  text: string;
  completed: boolean;
  timestamp: Date;
  author: string;
}

export interface ITaskItemProps {
  task: ITask;
  onToggleComplete: (id: number) => void;
  onRemove: (id: number) => void;
}

export interface ITaskFormProps {
  onAddTask: (text: string, author: string) => void;
}

export interface ITaskContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}