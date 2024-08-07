export interface ITask {
  id: number;
  text: string;
  completed: boolean;
  timestamp: Date;
  author: string;
  order: number;
}

export interface ITaskContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export interface ITaskItemProps {
  task: ITask;
  onToggleComplete: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
  onMoveUp: (id: number) => void;
  onMoveDown: (id: number) => void;
}

export interface IEditTaskModalProps {
  task: ITask | null;
  onClose: () => void;
  onSave: (id: number, newText: string) => void;
}

export interface ISortTasksProps {
  onSort: (criteria: 'timestamp' | 'author') => void;
}

export interface ITaskFormProps {
  onAddTask: (text: string, author: string) => void;
}

