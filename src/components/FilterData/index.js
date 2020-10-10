import React, { Component } from "react";
import FilterForm from "../FilterForm";
import Card from "../Card";
import API from "../../utils/API";
import Data from "./dummyData.json";

class FilterData extends Component {
  state = {
    filter: "",
    results: [],
    sortFirstA: false,
    sortFirstD: false,
    sortLastA: false,
    sortLastD: false
  };

  // When this component mounts, employee data is retrieved
  // API is used when api key can be hiddne and dummy data is used otherwise
  componentDidMount() {
    this.getDummy();
  }
  // pulls dummy data for employees using example json
  getDummy = () => {
    this.setState({ results: Data });
  };
  // pulls dummy data for employees using API
  getEmp = () => {
    API.search()
      .then(res => {
        this.setState({ results: res.data.data });
      })
      .catch(err => console.log(err));
  };
  // handles sorting by first name
  handleFirstSort = event => {
    event.preventDefault();
    const sorted = this.state.results;
    if (this.state.sortFirstA === false) {
      sorted.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
      this.setState({
        results: sorted,
        sortFirstA: true,
        sortFirstD: false,
        sortLastA: false,
        sortLastD: false
      });
    } else if (this.state.sortFirstD === false) {
      sorted.sort((a, b) => (a.firstName > b.firstName ? -1 : 1));
      this.setState({
        results: sorted,
        sortFirstA: false,
        sortFirstD: true,
        sortLastA: false,
        sortLastD: false
      });
    }
  };
  // handles sorting by last name
  handleLastSort = event => {
    event.preventDefault();
    const sorted = this.state.results;
    if (this.state.sortLastA === false) {
      sorted.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
      this.setState({
        results: sorted,
        sortFirstA: false,
        sortFirstD: false,
        sortLastA: true,
        sortLastD: false
      });
    } else if (this.state.sortLastD === false) {
      sorted.sort((a, b) => (a.lastName > b.lastName ? -1 : 1));
      this.setState({
        results: sorted,
        sortFirstA: false,
        sortFirstD: false,
        sortLastA: false,
        sortLastD: true
      });
    }
  };
  // handles imput changes
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  // renders the form and each card
  render() {
    const lowerFilter = this.state.filter.toLowerCase();
    // filters array as the user types
    const emps = this.state.results.filter(data => {
      return (
        this.state.filter === "" ||
        data.firstName.toLowerCase().includes(lowerFilter) ||
        data.lastName.toLowerCase().includes(lowerFilter)
      );
    });
    return (
      <div>
        <FilterForm
          filter={this.state.filter}
          handleInputChange={this.handleInputChange}
          handleFirstSort={this.handleFirstSort}
          handleLastSort={this.handleLastSort}
          sortFirstA={this.state.sortFirstA}
          sortFirstD={this.state.sortFirstD}
          sortLastA={this.state.sortLastA}
          sortLastD={this.state.sortLastD}
        />
        <div className="row d-flex justify-content-around">
          {emps.map(results => (
            <Card results={results} key={results.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default FilterData;
