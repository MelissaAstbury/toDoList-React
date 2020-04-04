import React, { useState } from "react";

import ListItem from "./ListItem/ListItem";
import "./ListItems.css";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const onClick = () => {
    setItems([...items, input]);
    setInput("");
  };

  const onInputChange = event => {
    setInput(event.target.value);
  };

  //   const myItems = items.map((i, index) => {
  //     return <ListItem key={index} item={i} />;
  //   });

  return (
    <div className="container">
      <p>This is your todo list!</p>
      <input
        type="text"
        placeholder="Enter Here"
        value={input}
        onChange={onInputChange}
        // (e) => setInput(event.target.value)
      />
      <br />
      <button onClick={onClick}>Submit!</button>
      {/* {myItems} */}
      {items.map((i, index) => {
        return <ListItem key={index} item={i} />;
      })}
    </div>
  );
};

export default ListItems;
