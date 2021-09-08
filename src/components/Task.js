import React from "react";


function Task( { text, category, onDeleteClick } ) {
  
  function handleDeleteTask(event) {
    const category = event.target.previousElementSibling.previousElementSibling.innerText
    const text = event.target.previousElementSibling.innerText
    return onDeleteClick({
      text: text,
      category: category
    })
    
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick= {handleDeleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
