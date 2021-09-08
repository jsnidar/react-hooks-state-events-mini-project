import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [ tasks, setTasks ] = useState(TASKS);
  const [ category, setCategory ] = useState("All")

  
  function handleDeleteTask (itemToDelete) {
    setTasks(tasks.filter(task => (task.category !== itemToDelete.category && task.text !== itemToDelete.text)));
  };

  const shownTasks = tasks.filter((task) => category === 'All' || task.category ===category);

  function onTaskFormSubmit (newTask) {
    setTasks([...tasks, newTask])
  }
  return (
    <div className="App"> 
      <h2>My tasks</h2>
      <CategoryFilter 
        onSelectedCategory={setCategory} 
        selectedCategory={category}
        categories={ CATEGORIES } />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={ shownTasks } onDeleteClick={ handleDeleteTask } />
    </div>
  );
}

export default App;
