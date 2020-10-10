import React from "react";
import "./style.css";

// returns the title of the page
function Title(props) {
  return <h1 className="title">Employee Directory{props.children}</h1>;
}

export default Title;
