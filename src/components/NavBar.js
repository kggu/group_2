// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";


// NEW - import the Link component
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-0 shadow">
        <div className="col-2 p-0">
        <Link to="/">
          <span className="navbar-brand col-4 bg-secondary text-light ">Home</span>
        </Link>
        </div>

      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
      
      <Link to="/map"><span className="navbar-brand col-1 text-secondary">Map</span></Link>
      


      <span className="navbar-nav col-1">
          {!isAuthenticated && (
            <button className="btn btn-secondary" onClick={() => loginWithRedirect({})}>Log in</button>
          )}
          {isAuthenticated && <button className="btn btn-secondary" onClick={() => logout()}>Log out</button>}
      </span>

    </nav>
  );
};

export default NavBar;