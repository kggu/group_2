// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";


// NEW - import the Link component
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      {isAuthenticated && (
        <span className="navbar-brand col-sm-3 col-md-2 mr-0">
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>&nbsp;
          <Link to="/map">Map</Link>
        </span>
      )}

      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>

      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          {!isAuthenticated && (
            <button className="btn btn-dark" onClick={() => loginWithRedirect({})}>Log in</button>
          )}
          {isAuthenticated && <button className="btn btn-dark" onClick={() => logout()}>Log out</button>}
        </li>
      </ul>

    </nav>
  );
};

export default NavBar;