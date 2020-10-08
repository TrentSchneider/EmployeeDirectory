import React from "react";
import UpArrow from "../UpArrow";
import DownArrow from "../DownArrow";

// look up turnary sintax for arrow functions to return svg files
function FilterForm(props) {
  function arrowF(ascend, desc) {
    if (ascend) {
      return <UpArrow />;
    } else if (desc) {
      return <DownArrow />;
    } else {
      return "";
    }
  }
  function arrowL(ascend, desc) {
    if (ascend) {
      return <UpArrow />;
    } else if (desc) {
      return <DownArrow />;
    } else {
      return "";
    }
  }
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
        <button
          onClick={props.handleFirstSort}
          className="btn btn-primary mt-3"
        >
          Sort First Name {arrowF(props.sortFirstA, props.sortFirstD)}
        </button>
        <button onClick={props.handleLastSort} className="btn btn-primary mt-3">
          Sort Last Name {arrowL(props.sortLastA, props.sortLastD)}
        </button>
      </div>
    </form>
  );
}

export default FilterForm;
