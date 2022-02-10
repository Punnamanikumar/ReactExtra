import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <div>
        ParentComponent
        <Child name="Manikumar" />
      </div>
    );
  }
}

export default Parent;
