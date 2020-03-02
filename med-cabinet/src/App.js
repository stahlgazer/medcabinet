import React from "react";
import "./App.css";
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navigation} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Register} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
