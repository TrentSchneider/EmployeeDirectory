import React from "react";

function FilterForm(props) {
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
      </div>
    </form>
  );
}

export default FilterForm;
