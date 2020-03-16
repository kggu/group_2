import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export const BackendAPIContext = React.createContext();

export const useBackendAPI = () => useContext(BackendAPIContext);

export const BackendAPIProvider = ({children}) => {

    const [hotSpots, setHotSpots] = useState()

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
    }
    
    return (
        <BackendAPIContext.Provider
          value={{
              updateHotSpots,
              hotSpots
          }}
        >
        {children}
        </BackendAPIContext.Provider>
      );
      
}