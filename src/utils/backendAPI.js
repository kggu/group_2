import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export const BackendAPIContext = React.createContext();

export const useBackendAPI = () => useContext(BackendAPIContext);

export const BackendAPIProvider = ({children}) => {

    const getHotSpots = async (viewport) => {
        //TODO fix range
        const address =
          process.env.REACT_APP_API_ROOT +
          "/hotspot/search?longitude=" +
          viewport.longitude +
          "&latitude=" +
          viewport.latitude +
          "&range=" +
          500000000;
        const response = await axios.get(address).then( response => {
            console.log(response.data)
            return response.data
        });

        return null;
    }
    
    return (
        <BackendAPIContext.Provider
          value={{
              getHotSpots
          }}
        >
        {children}
        </BackendAPIContext.Provider>
      );
      
}