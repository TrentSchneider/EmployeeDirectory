import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import FilterData from "./components/FilterData";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title></Title>
        <FilterData></FilterData>
      </Wrapper>
    );
  }
}

export default App;
