import React from "react";

class Updating extends React.Component {
  state = {
    num: 5,
  };

  componentDidUpdate() {
    console.log("This is componentDidUpdate Method");
  }

  render() {
    console.log("This is Render Method");
    return (
      <div>
        <h1>Updating Life Cycle Phase</h1>
        <h3>1.Render Method</h3>
        <h3>2.componentDidUpdate Method</h3>
        State Variable Current Value is {this.state.num}
        <br />
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
export default Updating;
