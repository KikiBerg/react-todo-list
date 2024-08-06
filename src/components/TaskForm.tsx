import { ReactElement, useState } from "react";
import { ITaskFormProps } from "../interfaces";
import '../css/TaskForm.css';

export function TaskForm (props: ITaskFormProps): ReactElement {
    const { onAddTask } = props;
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() && author.trim()) {
            onAddTask(text, author);
            setText('');
            setAuthor('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter your name"
        required
      />
      <button type="submit">Add Task</button>
    </form>
    );
}