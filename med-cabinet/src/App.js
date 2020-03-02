import React from "react";
import "./App.css";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navigation} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/contact" component={Contact} />

      {/* test protected route
      <PrivateRoute path="/contact" component={Contact}/> */}
    </div>
  );
}

export default App;
