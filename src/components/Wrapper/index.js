import React from "react";
import "./style.css";

// a wrapper for the app HTML content
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
