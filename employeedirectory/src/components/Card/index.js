import React from "react";
import "./style.css";
// TODO setup onchange for inserted text
function Card(props) {
  return (
    <div className="row">
      {props.results.map(results => (
        <div className="card">
          <div className="img-container">
            <img alt={results.firstName} src={results.picture} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {results.firstName} {results.lastName}
              </li>
              <li>
                <strong>Email:</strong> {results.email}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
