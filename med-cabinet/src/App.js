import React from "react";
import { Route, NavLink } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Browse from "./components/Browse";

function App() {
  return (
    <div className="App" style={{ width: '100%' }}>
      <NavigationBar />
      <Route path='/'>
        {/* <img src='https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
         style={{ width: '100%' }} /> */}
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/browse">
        <Browse />
      </Route>
    </div>
  );
}

export default App;
