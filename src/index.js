import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
// } from "react-router-dom";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDom.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );
