import React, { useState } from "react";

function NewTaskForm( {categories, onTaskFormSubmit }) {
  const [name , setName] = useState('')
  const [category, setCategory] = useState('Code')
  const categoryOptions = categories.map(function (category) {
    return category !== "All" ? <option key={category}>{category}</option> : null
    });

  function handleSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({
      text: name,
      category: category
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)} name="category">
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
