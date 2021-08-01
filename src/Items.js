import React, { useState } from "react";
import "./styles.css";

//Initial Items to show on Screen
const initItems = [
  {
    id: 0,
    number: 2
  },
  {
    id: 1,
    number: 4
  },
  {
    id: 2,
    number: 10
  }
];

//Whole List rendering Funcation
const List = ({ items, removeItem }) => (
  <ul className="list-group">
    {items.map((item) => (
      <Item key={item.id} item={item} removeItem={removeItem} />
    ))}
  </ul>
);

//Each Item from List Rendering Function
const Item = ({ item, removeItem }) => (
  <li className="list-group-item">
    {/* <span>{item.id}, </span> */}
    <span>{item.number} </span>
    <button
      type="button"
      class="btn btn-outline-warning"
      onClick={() => removeItem(item.id)}
    >
      Remove
    </button>
  </li>
);

//Main Function
function Items() {
  //Items Array using useState Hoook
  const [items, setItems] = useState(initItems);

  //Remove-Item Function
  function removeItem(id) {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  }

  //Add-Item Funcation
  function addItem() {
    setItems([
      ...items,
      {
        id: items.length,
        number: Math.floor(Math.random() * 10 + 1)
      }
    ]);
  }

  return (
    <div className="divbox w-50 p-5">
      <h6>List using "useState" Hook</h6>
      <List items={items} removeItem={removeItem} />
      <button type="button" className="button-75" onClick={addItem}>
        Add New Item
      </button>
    </div>
  );
}

export default Items;
