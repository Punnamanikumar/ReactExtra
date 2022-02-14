import React, { Component } from "react";

class Mounting extends Component {
  constructor() {
    super();
    console.log("This is Constructor");
  }
  componentDidMount() {
    console.log("This is componentDidMount");
  }
  render() {
    console.log("This is Render");
    return (
      <div>
        <h1>Mounting Life Cycle Phase</h1>
        <h3>1.Constructor Method</h3>
        <h3>2.Render Method</h3>
        <h3>3.ComponentDidMount Method</h3>
      </div>
    );
  }
}

export default Mounting;
