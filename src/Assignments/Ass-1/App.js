import React from "react";
import "./App.css";
import ClassComp from "./Assignments/Ass-1/ClassComp";
import FunctionalComp from "./Assignments/Ass-1/FunctionalComp";
import "./Assignments/Ass-1/Background.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFunctional: true,
      isClass: true,
    };
  }
  functional = () => {
    this.setState({
      isFunctional: !this.state.isFunctional,
    });
  };
  class = () => {
    this.setState({
      isClass: !this.state.isClass,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Styling Using Functional and Class Component</h1>
        <button onClick={this.functional}>
          To see styling in Functional Component
        </button>
        <button onClick={this.class}>
          To see styling in Functional Component
        </button>
        {this.state.isFunctional && <FunctionalComp />}
        {this.state.isClass ? <ClassComp /> : null}
      </div>
    );
  }
}
export default App;
