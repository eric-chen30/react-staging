import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  handleSubmit = () => {
    const { value: name } = this.nameNode;
    const { value: age } = this.nameAge;
    const person = { id: nanoid(), name: name, age: age };
    this.props.addPerson(person);
    this.nameNode.value = "";
    this.nameAge.value = "";
  };
  render() {
    console.log("Person组件接收的props:", this.props.persons);
    return (
      <div>
        <h1>我是Person组件, 上方组件求和为{this.props.upComponentCount}</h1>
        &nbsp;
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="Enter your name"
        />
        &nbsp;
        <input
          ref={(c) => (this.nameAge = c)}
          type="text"
          placeholder="Enter your age"
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {this.props.persons.map((person) => {
            return (
              <li key={person.id}>
                {person.name} - {person.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ persons: state.persons, upComponentCount: state.count }),
  {
    addPerson: createAddPersonAction,
  }
)(Person);
