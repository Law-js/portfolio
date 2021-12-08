import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./../pages/Home";
import Profil from "./../pages/Profil";
import Contact from "./../pages/Contact";
import Portfolio from "./../pages/Portfolio";

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
