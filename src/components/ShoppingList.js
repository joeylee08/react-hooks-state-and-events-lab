import React, {useState} from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")
  function changeCategory(e) {
    setCategory(() => e.target.value)
  }
  const filtered = items.filter(item => {
    return item.category === selectedCategory || selectedCategory === "All"
  })
  const mapped = filtered.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))
  return (
    <div>
      <Filter changeCategory={changeCategory}/>
      <ul className="Items">
        {mapped}
      </ul>
    </div>
  );
}

export default ShoppingList;
