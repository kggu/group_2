// src/components/NavBar.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";
import postrequest from "./postrequest.json";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, getTokenSilently} = useAuth0();

  const [request, changeRequest] = useState(postrequest);

  const sendGetRequest = async (longitude, latitude, range) => {
    const address = process.env.REACT_APP_API_ROOT + "/hotspot/search?longitude=" + longitude + "&latitude=" + latitude + "&range=" + range
    const response = await axios.get(address)
    console.log(response.data)
  };

  const sendPostRequest = async (request) => {
    const token = await getTokenSilently();
    
    const address = process.env.REACT_APP_API_ROOT + "/hotspot"

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      }
    };
    const response = await axios.post(address, request, axiosConfig)
    console.log(token)
  };


  return (
    <nav className="m-0 p-0 navbar navbar-dark fixed-top custombg-dark flex-md-nowrap p-0 shadow">
      <Link to="/">
        <button className="btn custombtn navitem custombg-orange text-light">Home</button>
      </Link>
      <div className="customseparator"></div>

      <input className="form-control custominput" type="text" placeholder="Search" aria-label="Search" ></input>
      
      {/*<Link to="/map">*/}
        <button className="btn custombtn navitem custombg-orange text-light" onClick={() => sendPostRequest(request)}>Map</button>
      {/*</Link>*/}
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