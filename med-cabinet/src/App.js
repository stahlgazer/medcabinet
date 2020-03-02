import React from "react";
import "./App.css";
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import Contact from './components/Contact';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      test
      <Register />
      <Contact />
    </div>
  );
}

export default App;
