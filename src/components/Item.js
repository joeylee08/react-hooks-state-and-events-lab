import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, inOrOut] = useState(false)

  function cartToggle() {
    inOrOut((inCart) => !inCart)
  }

  return (
    <li className="">
      <span className={inCart ? "in-cart" : ""}>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartToggle} className={inCart ? "remove" : "add"}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
