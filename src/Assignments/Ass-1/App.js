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

  render() {
    return (
      <div className="App">
        <h1>Styling Using Functional and Class Component</h1>
        <button onClick={()=>this.setState({ isFunctional:!this.state.isFunctional })}> To see styling in Functional Component </button>
        <button onClick={()=>this.setState({ isClass: !this.state.isClass })}> To see styling in Class Component </button>
        {this.state.isFunctional && <FunctionalComp />}
        {this.state.isClass ? <ClassComp /> : null}
      </div>
    );
  }
}
export default App;
