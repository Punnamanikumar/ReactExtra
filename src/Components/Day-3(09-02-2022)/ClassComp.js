import React from "react";

class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      cond: true,
    };
  }
  toggle = () => {
    this.setState({ cond: !this.state.cond });
  };
  render() {
    return (
      <div>
        This is Class Component
        <br />
        {this.state.cond && <h1>Condition Satisfied</h1>}
        {this.state.cond ? (
          <h1>Condition Satisfied</h1>
        ) : (
          <h1>Condition Failed</h1>
        )}
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

export default ClassComp;
