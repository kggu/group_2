// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const sendGetRequest = async (longitude, latitude, range) => {
    const address = process.env.REACT_APP_API_ROOT + "/hotspot/search?longitude=" + longitude + "&latitude=" + latitude + "&range=" + range
    const response =
      await axios.get(address)
    console.log(response.data)
  };


  return (
    <nav className="m-0 p-0 navbar navbar-dark fixed-top custombg-dark flex-md-nowrap p-0 shadow">
      <Link to="/">
        <button className="btn custombtn navitem custombg-orange text-light">Home</button>
      </Link>
      <div className="customseparator"></div>

      <input className="form-control custominput" type="text" placeholder="Search" aria-label="Search" ></input>
      
      <Link to="/map">
        <button className="btn custombtn navitem custombg-orange text-light" >Map</button>
      </Link>
      <div className="customseparator"></div>

      <span className="navbar-nav col-1 p-0">
        {!isAuthenticated && (
          <button className="btn custombtn navitem m-0 custombg-orange text-light" onClick={() => loginWithRedirect({})}>Log in</button>
        )}
        {isAuthenticated && <button className="btn custombtn navitem m-0 custombg-orange text-light" onClick={() => logout()}>Log out</button>}
      </span>

    </nav>
  );
};

export default NavBar;