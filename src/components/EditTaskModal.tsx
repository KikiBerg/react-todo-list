import { ReactElement, useState } from 'react';
import { IEditTaskModalProps } from '../interfaces';
import '../css/EditTaskModal.css'

export function EditTaskModal(props: IEditTaskModalProps): ReactElement {
  const { task, onClose, onSave } = props;
  const [editedText, setEditedText] = useState(task ? task.text : '');

  const handleSave = () => {
    if (task && editedText.trim()) {
      onSave(task.id, editedText);
      onClose();
    }
  };

  if (!task) {
    return <></>;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
