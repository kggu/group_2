import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";


export const BackendAPIContext = React.createContext();

export const useBackendAPI = () => useContext(BackendAPIContext);

export const BackendAPIProvider = ({children}) => {
  const { getTokenSilently } = useAuth0();
  
  const [hotSpots, setHotSpots] = useState();

  const updateHotSpots = async (viewport) => {
    //TODO fix range
    console.log(viewport)
    const address =
      process.env.REACT_APP_API_ROOT +
      "/hotspot/search?longitude=" +
      viewport.longitude +
      "&latitude=" +
      viewport.latitude +
      "&range=" +        
      500000000;
    const response = await axios.get(address).then( response => {
      setHotSpots(response.data)
    });
  };

  const createNewHotSpot = async (request) => {
    const token = await getTokenSilently();

    const address = process.env.REACT_APP_API_ROOT + "/hotspot"

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }
    const response = await axios.post(address, request, axiosConfig);
    console.log("Post request");
    console.log(response);
  };

  /*const sendPostRequest = async (request) => {
    const token = await getTokenSilently();
    
    const address = process.env.REACT_APP_API_ROOT + "/hotspot"
  
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      }
    };
    const response = await axios.post(address, request, axiosConfig);
  };*/
    
  return (
    <BackendAPIContext.Provider
      value={{
          updateHotSpots,
          hotSpots,
          createNewHotSpot
      }}
    >
    {children}
    </BackendAPIContext.Provider>  
  );
}