import React from "react";


function CategoryFilter( { categories, selectedCategory, onSelectedCategory } ) {

  const categoryButtons = categories.map(category => {
    const className = category === selectedCategory ? 'selected' : null;
    return (
      <button 
        className={className} 
        key={category} 
        onClick={() => onSelectedCategory(category)}
      >
        {category}
      </button>  
    )
   });

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
