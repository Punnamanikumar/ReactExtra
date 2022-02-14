import React from "react";
import "./App.css";
import Mounting from "./Components/Day-5(14-02-2022)/ClassLifeCyclePhases/Mounting";
import Unmounting from "./Components/Day-5(14-02-2022)/ClassLifeCyclePhases/Unmounting";
import Updating from "./Components/Day-5(14-02-2022)/ClassLifeCyclePhases/Updating";
class App extends React.Component {
  state = {
    showComp: true,
  };
  render() {
    return (
      <div className="App">
        {/* <Mounting /> */}
        {/* <Updating /> */}
        {this.state.showComp && <Unmounting />}
        <button onClick={() => this.setState({ showComp: !this.state.showComp })} > Remove Component </button>
      </div>
    );
  }
}
export default App;
