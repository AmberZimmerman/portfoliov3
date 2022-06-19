import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import About from "./pages/About/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<About />} />
      </Routes>
    </Router>
  );
}
