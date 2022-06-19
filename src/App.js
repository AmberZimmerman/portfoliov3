import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact/Contact";
import projects from "../src/projects";
import Nav from "./components/Nav";

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/work" element={<Works projects={projects} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
