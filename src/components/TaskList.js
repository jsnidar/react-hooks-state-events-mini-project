import React from "react";
import Task from './Task.js';
import { v4 as uuid } from "uuid";


function TaskList({ tasks, onDeleteClick }) {
  const itemsInList = tasks.map((task) => (
    <Task 
      onDeleteClick={onDeleteClick} 
      key={uuid()} 
      text={task.text} 
      category={task.category} />
      ));
  return (
    <div className="tasks">
     {itemsInList}
    </div>
  );
}

export default TaskList;
