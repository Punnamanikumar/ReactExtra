import React from "react";

const FunctionalComp = () => {
  const inline = {
    color: "blue",
  };
  return (
    <>
      <div className="func">
        <h2>This is Created using FunctionalComponent</h2>
        <p className="external">This is done using external CSS</p>
        <p style={inline}>This is done using inline CSS</p>
      </div>
    </>
  );
};

export default FunctionalComp;
