import React from 'react';

function TaskItem({ task, removeTask, toggleMarked }) {
  return (
    <li className="collection-item">
      <label>
        <input
          checked={task.done ? 'checked' : ''}
          type="checkbox"
          className="filled-in"
          onChange={() => toggleMarked(task.id)}
        />
        <span className={task.done ? 'done' : ''}>{task.description}</span> | <span>{task.deadline}</span>
      </label>
      <a className="right red-text" href="#">
        <i className="material-icons" onClick={() => removeTask(task.id)}>
          x
        </i>
      </a>
    </li>
  );
}

export default TaskItem;
