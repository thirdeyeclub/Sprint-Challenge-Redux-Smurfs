import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { addSmurf } from "../actions";

import List from "./List";
import Form from "./SmurfForm.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
        <Form submit={this.props.addSmurf} />
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(App);