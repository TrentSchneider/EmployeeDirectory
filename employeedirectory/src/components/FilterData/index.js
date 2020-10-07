import React, { Component } from "react";
import FilterForm from "../FilterForm";
import Card from "../Card";
import API from "../../utils/API";

class FilterData extends Component {
  state = {
    filter: "",
    results: []
  };

  // When this component mounts, search the API for employees
  componentDidMount() {
    this.getEmp();
  }

  getEmp = () => {
    API.search()
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // TODO check text filtering and mapping functions
  // TODO add button sorting for first and last name

  render() {
    const emps = this.state.results.filter(
      data =>
        this.state.filter === "" ||
        data.firstName.includes(this.state.filter) ||
        data.lastName.includes(this.state.filter)
    );
    return (
      <div>
        <FilterForm
          filter={this.state.filter}
          //   handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Card results={emps} />
      </div>
    );
  }
}

export default FilterData;
