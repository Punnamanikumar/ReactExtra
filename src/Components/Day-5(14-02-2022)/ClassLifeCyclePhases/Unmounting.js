import React from "react";
class Unmounting extends React.Component {
  componentWillUnmount() {
    console.log("This is componentWillUnmount Method");
  }
  render() {
    return (
      <div>
        <h1>Unmounting Phase</h1>
        <h3>1.ComponentWillUnmount Method</h3>
      </div>
    );
  }
}

export default Unmounting;
