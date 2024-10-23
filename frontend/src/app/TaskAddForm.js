'use client';

import React, { useEffect } from 'react';

function TaskAddForm({ addTask }) {

  useEffect(() => {
    const M = require('materialize-css');
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const newTaskDesc = e.target.description.value;
    const newTaskDate = e.target.deadline.value;

    addTask(newTaskDesc, newTaskDate);
  }

  function onfocus(e) {
    const datepicker = e.target;
    M.Datepicker.init(datepicker, { format: 'yyyy-mm-dd' });
  }

  return (
    <div className="row">
      <form className="col s12" name="form" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s5">
            <input id="description" name="description" type="text" />
            <label htmlFor="description">Description</label>
          </div>
          <div className="input-field col s5">
            <input onFocus={onfocus} className="datepicker" id="deadline" name="deadline" type="text" />
            <label htmlFor="deadline">Deadline</label>
          </div>
          <div className="input-field col s2">
            <button className="btn-floating waves-effect waves-light teal" type="submit">
              <i className="material-icons">+</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskAddForm;
