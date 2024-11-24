import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { task } = this.props;
    return <li>{task}</li>;
  }
}

export default ListItem;
