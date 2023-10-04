import React from 'react'

function Filter({changeCategory}) {
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => changeCategory(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    </div>
  )
}

export default Filter