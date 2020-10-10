import React from "react";
import UpArrow from "../UpArrow";
import DownArrow from "../DownArrow";

function FilterForm(props) {
  // shows arrows on button when sorting using first name
  function arrowF(ascend, desc) {
    if (ascend) {
      return <UpArrow />;
    } else if (desc) {
      return <DownArrow />;
    } else {
      return "";
    }
  }
    // shows arrows on button when sorting using last name
  function arrowL(ascend, desc) {
    if (ascend) {
      return <UpArrow />;
    } else if (desc) {
      return <DownArrow />;
    } else {
      return "";
    }
  }
  
  // returns the user filter form and sorting buttons
  return (
    <form>
      <div className="form-group">
        <label htmlFor="filter">Filter employees by first or last name:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="filter"
          type="text"
          className="form-control"
          placeholder="Filter Employees"
          id="filter"
        />
        <div className="d-flex justify-content-center">
          <button
            onClick={props.handleFirstSort}
            className="btn btn-primary mt-3 mx-1"
          >
            Sort First Name {arrowF(props.sortFirstA, props.sortFirstD)}
          </button>
          <button
            onClick={props.handleLastSort}
            className="btn btn-primary mt-3 mx-1"
          >
            Sort Last Name {arrowL(props.sortLastA, props.sortLastD)}
          </button>
        </div>
      </div>
    </form>
  );
}

export default FilterForm;
