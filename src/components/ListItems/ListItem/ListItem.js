import React from "react";

import "./ListItem.css";

const ListItem = props => {
  return <p className="list-item">{props.item}</p>;
};

export default ListItem;
