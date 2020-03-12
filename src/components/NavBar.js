// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/assets/index.css';
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Button} from 'react-bootstrap'


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
    .then(results =>  {

      console.log(results)
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
  );
};

export default NavBar;