import { ReactElement } from 'react';
import { ISortTasksProps } from '../interfaces';

export function SortTasks(props: ISortTasksProps): ReactElement {
  const { onSort } = props;

  return (
    <div className="sort-tasks">
      <label>Sort by: </label>
      <select
        onChange={(e) => onSort(e.target.value as 'timestamp' | 'author')}
      >
        <option value="timestamp">Timestamp</option>
        <option value="author">Author</option>
      </select>
    </div>
  );
}
