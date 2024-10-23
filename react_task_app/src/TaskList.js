import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ items, removeTask, toggleMarked }) {
  const taskListUI = items.map(task => (
    <TaskItem key={task.id} task={task} removeTask={removeTask} toggleMarked={toggleMarked} />
  ));

  return <ul className="collection">{taskListUI}</ul>;
}

export default TaskList;
