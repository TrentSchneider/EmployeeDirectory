import React, { Component } from "react";
import FilterForm from "./FilterForm";
import Card from "./Card";
import API from "../utils/API";

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

  //   // When the form is submitted, search the Giphy API for `this.state.search`
  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //     this.searchGiphy(this.state.search);
  //   };

  render() {
    return (
      <div>
        <FilterForm
          filter={this.state.filter}
          //   handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {results
          .filter(
            (firstName, lastName) =>
              firstName.includes(filter) || lastName.includes(filter)
          )
          .map(filtered => (
            <Card results={filtered} />
          ))}
      </div>
    );
  }
}

export default FilterData;
