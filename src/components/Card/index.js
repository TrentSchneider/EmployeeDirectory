import React from "react";
import "./style.css";

// returns the a card for each user with their information filled in
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
