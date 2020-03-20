// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import map from "./components/MapBox";
import Frontpage from "./components/Frontpage";
import OverviewPage from "./components/OverviewPage/OverviewPage"

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component = {Frontpage}/>
          <Route exact path="/map/:lat/:lng/:zoom" component={map} />
          <Route exact path="/hotspot/:slug" component={OverviewPage} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;