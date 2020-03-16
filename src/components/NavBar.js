// src/components/NavBar.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";
<<<<<<< HEAD
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/assets/index.css';
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import history from "../utils/history";

=======
import postrequest from "./postrequest.json";
>>>>>>> 7ac899049c7aa380d9c18f04089e77bfb3462868

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, getTokenSilently} = useAuth0();

  const [request, changeRequest] = useState(postrequest);

  const sendGetRequest = async (longitude, latitude, range) => {
    const address = process.env.REACT_APP_API_ROOT + "/hotspot/search?longitude=" + longitude + "&latitude=" + latitude + "&range=" + range
    const response = await axios.get(address)
    console.log(response.data)
  };

<<<<<<< HEAD
  const findLongLat = async (place_id) => {
    geocodeByPlaceId(place_id)
    .then(results =>  {
      const lat = results[0].geometry.location.lat();
      const lng = results[0].geometry.location.lng();
      const addr = "/map/" + lat + "/" + lng;
      history.push(addr)
    })
    .catch(error => console.error(error));
  };

  return (
    <Navbar fill variant="customdark" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Button variant="customorange" className="mr-sm-2" href="/">Home</Button>
    </Nav>
    <GooglePlacesAutocomplete 
      onSelect={({ place_id }) => (
        findLongLat(place_id)
      )}
    />
    {!isAuthenticated && (
        <Button variant="customorange" onClick={() => loginWithRedirect({})}>Log in</Button>
    )}
    {isAuthenticated &&  (
        <Button variant="customorange" onClick={() => logout()}>Log out</Button>
    )}
    
  </Navbar.Collapse>
  </Navbar>
=======
  const sendPostRequest = async (request) => {
    const token = await getTokenSilently();
    
    const address = process.env.REACT_APP_API_ROOT + "/hotspot"

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      }
    };
    const response = await axios.post(address, request, axiosConfig);
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
>>>>>>> 7ac899049c7aa380d9c18f04089e77bfb3462868
  );
};

export default NavBar;