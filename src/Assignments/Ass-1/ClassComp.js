import React from "react";

class ClassComp extends React.Component {
  render() {
    const inline = {
      color: "blue",
    };
    return (
      <>
        <div className="class">
          <h2>This is Created using ClassComponent</h2>
          <p className="external">This is done using external CSS</p>
          <p style={inline}>This is done using inline CSS</p>
        </div>
      </>
    );
  }
}

export default ClassComp;
