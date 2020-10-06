import React from "react";
import "./style.css";
// TODO setup onchange for inserted text
function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.firstName}  src={props.picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
