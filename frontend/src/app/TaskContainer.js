'use client';
import React, { useState, useEffect } from 'react';
import TaskAddForm from './TaskAddForm';
import TaskList from './TaskList';

// TaskContainer component
export default function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  
  async function fetchTasks() {
    try {
      const response = await fetch('/api', {
        method: 'GET',
      });
      const data = await response.json();
      setTasks(data.tasks);  // Set the fetched tasks in the state
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);  // Disable loading spinner after fetching
    }
  }

  // Fetch tasks from API when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);  // Empty dependency array to run only on mount

  // Function to add a new task
  async function addTask(description, deadline) {
    if (!description || !deadline) {
      return M.toast({ html: 'Please fill all the fields!', classes: 'red darken-4' });
    }

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, deadline }),
      });

      const result = await response.json();
      if (response.ok) {
        fetchTasks(); // Refetch tasks after adding
        M.toast({ html: 'Task added successfully!', classes: 'green darken-2' });
      } else {
        M.toast({ html: result.message, classes: 'red darken-4' });
      }
    } catch (error) {
      console.error('Error adding task:', error);
      M.toast({ html: 'Failed to add task', classes: 'red darken-4' });
    }
  }

  // Function to remove a task
  async function removeTask(id) {
    try {
      const response = await fetch(`/api?id=${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (response.ok) {
        fetchTasks();  // Refetch tasks after removal
        M.toast({ html: 'Task removed successfully!', classes: 'green darken-2' });
      } else {
        M.toast({ html: result.message, classes: 'red darken-4' });
      }
    } catch (error) {
      console.error('Error removing task:', error);
      M.toast({ html: 'Failed to remove task', classes: 'red darken-4' });
    }
  }

  // Function to toggle task done/undone
  async function toggleMarked(id, done) {
    try {
      const response = await fetch(`/api?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ done: !done }),  // Toggle the done status
      });
      const result = await response.json();
      if (response.ok) {
        fetchTasks();  // Refetch tasks after toggle
        M.toast({ html: `Task marked as ${!done ? 'done' : 'undone'}!`, classes: 'green darken-2' });
      } else {
        M.toast({ html: result.message, classes: 'red darken-4' });
      }
    } catch (error) {
      console.error('Error toggling task:', error);
      M.toast({ html: 'Failed to toggle task', classes: 'red darken-4' });
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 card" style={{ padding: '2em' }}>
          <h4 className="bold center-align">React Task App</h4>
          <TaskAddForm addTask={addTask} />
          {loading ? (
            <p className="blue-text center">Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="red-text center">Task list is empty. Let's add one!</p>
          ) : (
            <TaskList
              items={tasks}
              removeTask={removeTask}
              toggleMarked={(id, done) => toggleMarked(id, done)}
            />
          )}
        </div>
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from 'react';
// import TaskAddForm from './TaskAddForm';
// import TaskList from './TaskList';

// const initialTasks = [
//   {
//     id: 1,
//     description: 'Buy Milk',
//     deadline: '2017-09-11',
//     done: true
//   },
//   {
//     id: 2,
//     description: 'Catch Pokemon',
//     deadline: '2017-09-10',
//     done: false
//   },
//   {
//     id: 3,
//     description: 'Run a marathon',
//     deadline: '2017-09-09',
//     done: false
//   }
// ];

// const TaskContainer = () => {
//   const [tasks, setTasks] = useState(initialTasks); // state for tasks
//   const [lastId, setLastId] = useState(initialTasks.length); // state for keeping track of the last ID

//   useEffect(() => {
//     const M = require('materialize-css');
//   }, []);

//   // Function to add a task
//   const addTask = (description, deadline) => {
//     if (description === '' || deadline === '')
//       return M.toast({ html: 'Please fill all the fields!', classes: 'red darken-4' });

//     const newId = lastId + 1;
//     const newTask = {
//       id: newId,
//       description,
//       deadline,
//       done: false
//     };

//     setTasks([...tasks, newTask]);
//     setLastId(newId); // Update lastId
//   };

//   // Function to remove a task
//   const removeTask = (id) => {
//     const filteredTasks = tasks.filter(task => task.id !== id);
//     setTasks(filteredTasks);

//     M.toast({ html: 'Task removed!', classes: 'red darken-4' });
//   };

//   // Function to toggle task completion
//   const toggleMarked = (id) => {
//     const updatedTasks = tasks.map(task => 
//       task.id === id ? { ...task, done: !task.done } : task
//     );
//     setTasks(updatedTasks);

//     const task = updatedTasks.find(task => task.id === id);
//     task.done
//       ? M.toast({ html: 'Marked as done!', classes: 'blue darken-2' })
//       : M.toast({ html: 'Marked as undone!', classes: 'lime darken-2' });
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col s12 card" style={{ padding: '2em' }}>
//           <h4 className="bold center-align">React Task App</h4>
//           <TaskAddForm addTask={addTask} />
//           {tasks.length === 0 ? (
//             <p className="red-text center">Task list is empty. Let's add one!</p>
//           ) : (
//             <TaskList items={tasks} removeTask={removeTask} toggleMarked={toggleMarked} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskContainer;