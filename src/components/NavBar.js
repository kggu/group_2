// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/assets/index.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const sendGetRequest = async (longitude, latitude, range) => {
    const address = process.env.REACT_APP_API_ROOT + "/hotspot/search?longitude=" + longitude + "&latitude=" + latitude + "&range=" + range
    const response =
      await axios.get(address)
    console.log(response.data)
  };

  const findLongLat = async (place_id) => {
    geocodeByPlaceId(place_id)
    .then(results => console.log(results))
    .catch(error => console.error(error));
  };



  return (
    <nav className="m-0 p-0 navbar navbar-dark fixed-top custombg-dark flex-md-nowrap shadow">
      <Link to="/">
        <button className="btn custombtn navitem custombg-orange text-light">Home</button>
      </Link>
      <div className="customseparator"></div>

      <div className="m-0 p-0">
        <GooglePlacesAutocomplete 
        onSelect={({ place_id }) => (
          findLongLat(place_id)
        )}/>
      </div>
      
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