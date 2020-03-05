import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import BrowseHeader from './components/BrowseHeader';

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      
      {/* <Link to="/register">register</Link>
      <Link to="/login">login</Link>
      <Link to="/browse">browse</Link>
      <Link to="/contact">contact</Link>
      <Link to="/dashboard">dashboard</Link> */}
      <Route path="/" component={NavigationBar} />
      <Route path="/" component={BrowseHeader} />
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/contact" component={Contact} />

      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/browse" component={Browse} />
    </div>
  );
}

export default App;
