import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* <div
      style={{
        background: "linear-gradient(aqua, hotpink, rgb(236, 91, 91)",
        minHeight: "100vh",
        marginTop: "-1.8%",
      }}
    > */}
    <App />
    {/* </div> */}
  </React.StrictMode>,
  document.getElementById("root")
);
