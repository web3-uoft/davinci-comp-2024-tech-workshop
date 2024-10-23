import React, { useState } from 'react';
import TaskAddForm from './TaskAddForm';
import TaskList from './TaskList';

const initialTasks = [
  {
    id: 1,
    description: 'Buy Milk',
    deadline: '2017-09-11',
    done: true
  },
  {
    id: 2,
    description: 'Catch Pokemon',
    deadline: '2017-09-10',
    done: false
  },
  {
    id: 3,
    description: 'Run a marathon',
    deadline: '2017-09-09',
    done: false
  }
];

const TaskContainer = () => {
  const [tasks, setTasks] = useState(initialTasks); // state for tasks
  const [lastId, setLastId] = useState(initialTasks.length); // state for keeping track of the last ID

  // Function to add a task
  const addTask = (description, deadline) => {
    if (description === '' || deadline === '')
      return window.M.toast({ html: 'Please fill all the fields!', classes: 'red darken-4' });

    const newId = lastId + 1;
    const newTask = {
      id: newId,
      description,
      deadline,
      done: false
    };

    setTasks([...tasks, newTask]);
    setLastId(newId); // Update lastId
  };

  // Function to remove a task
  const removeTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);

    window.M.toast({ html: 'Task removed!', classes: 'red darken-4' });
  };

  // Function to toggle task completion
  const toggleMarked = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);

    const task = updatedTasks.find(task => task.id === id);
    task.done
      ? window.M.toast({ html: 'Marked as done!', classes: 'blue darken-2' })
      : window.M.toast({ html: 'Marked as undone!', classes: 'lime darken-2' });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 card" style={{ padding: '2em' }}>
          <h4 className="bold center-align">React Task App</h4>
          <TaskAddForm addTask={addTask} />
          {tasks.length === 0 ? (
            <p className="red-text center">Task list is empty. Let's add one!</p>
          ) : (
            <TaskList items={tasks} removeTask={removeTask} toggleMarked={toggleMarked} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;