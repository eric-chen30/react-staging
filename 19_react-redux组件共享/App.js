import React, { Component } from "react";
import Counter from "./containers/Count";
import Person from "./containers/Person";

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <Person />
      </div>
    );
  }
}
