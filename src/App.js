// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import map from "./components/MapBox";
import Frontpage from "./components/Frontpage";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";

// NEW - import the PrivateRoute component
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component = {Frontpage}/>
          <Route path="/map" component={map} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;