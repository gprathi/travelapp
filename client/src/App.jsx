import React from "react";
import SearchRoot from "./pages/search-root";
import { Link, Route, Switch } from 'react-router-dom';
import "./styles/main.css";
import * as logo from './images/tidesandtravels1.png'
import Home from "./pages/Home"
import About from "./pages/About"

// Root component
const App = () => {
  return (
    <>
      <div class="nav">
        <img src={logo} alt="logo" draggable={false} />
        <div class="links">


          <Link className="link" to="/about">Why Tides&Travels</Link>
          <Link className="link" to="/groups">GROUPS & EVENTS</Link>
          <Link className="link" to="/land">LAND LOVERS</Link>
          <Link className="link" to="/extras">EXTRAS</Link>
          <Link className="link" to="/booked">ALREADY BOOKED</Link>
        </div>
      </div>

      <div className="center">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

        </Switch>

      </div>
    </>
  );
};

export default App;
