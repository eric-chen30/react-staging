import React, { Component } from "react";
import ListItem from "../ListItem";

class MyList extends Component {
  state = {
    taskArray: this.props.theList,
    newItem: "",
  };

  handleClear = () => {
    this.setState({ taskArray: [] });
  };

  handleChange = (e) => {
    this.setState({ newItem: e.target.value });
  };

  addItem = (e) => {
    if (this.state.newItem.trim() !== "") {
      e.preventDefault();
      const newList = [...this.state.taskArray, this.state.newItem];
      this.setState({ taskArray: newList, newItem: "" });
    } else {
      alert("Please enter a task before submitting.");
    }
  };

  render() {
    let todoItems = this.state.taskArray.map((item, index) => (
      <ListItem task={item} key={index} />
    ));
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            value={this.state.newItem}
            onChange={this.handleChange}
          />
          <button type="submit">Add To List</button>
        </form>
        <h1>Things I should stop procrastinating:</h1>
        <ul>{todoItems}</ul>
        <button onClick={this.handleClear}>CLEAR</button>
      </div>
    );
  }
}

export default MyList;
