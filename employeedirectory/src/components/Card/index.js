import React from "react";
import "./style.css";
// TODO setup onchange for inserted text
function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.results.firstName} src={props.results.picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.results.firstName}{" "}
            {props.results.lastName}
          </li>
          <li>
            <strong>Email:</strong> {props.results.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
