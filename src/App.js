import React, { useState } from 'react';
import './App.css';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Blogposts from './pages/Blogposts';
import Blogpostpage from "./pages/Blogpostpage";

function App() {
let [isAuthenticated, toggleIsAuthenticated ] = useState(true);

  return (
    <>
        <nav>
            <ul>
                <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                <li><NavLink exact to="Login" activeClassName="active-link">Login</NavLink></li>
                <li><NavLink exact to="Blogposts" activeClassName="active-link">Blogposts</NavLink></li>
            </ul>
        </nav>
      <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/login" >
              <Login/>
          </Route>
          <Route exact path="/blogposts">
              {isAuthenticated === true ? <Blogposts/> : <Redirect to="/"/>}
          </Route>
          <Route path="/blogpostpage/:blogId">
              <Blogpostpage/>
          </Route>
      </Switch>

    </>
  );
}

export default App;
