import React, { Component } from "react";
import FilterForm from "../FilterForm";
import Card from "../Card";
import API from "../../utils/API";

class FilterData extends Component {
  state = {
    filter: "",
    results: [],
    sortFirstA: false,
    sortFirstD: false,
    sortLastA: false,
    sortLastD: false
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

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // TODO add button sorting for first and last name

  render() {
    const lowerFilter = this.state.filter.toLowerCase();
    const emps = this.state.results.filter(
      data =>
        this.state.filter === "" ||
        data.firstName.toLowerCase().includes(lowerFilter) ||
        data.lastName.toLowerCase().includes(lowerFilter)
    );
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
