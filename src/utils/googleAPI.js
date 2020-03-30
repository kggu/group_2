import React, { useState, useEffect, useContext } from "react";

export const GoogleAPIContext = React.createContext();

export const useGoogleAPI = () => useContext(GoogleAPIContext);

export const GoogleAPIProvider = ({children}) => {
    const [ storedLocation, setStoredLocation ] = useState();

    const storeLocation = (lng, lat) => {
        setStoredLocation({
            longitude: lng,
            latitude: lat
        })
    }

    const findNearbyPlaces = async () => {
        console.log(storedLocation)
    }

    /*const [viewport, setViewPort] = useState({
        width: "100%",
        height: window.innerHeight,
        latitude: 65.013,
        longitude: 25.47,
        zoom: 16
      });*/

      
    return (
      <GoogleAPIContext.Provider
        value={{
            storeLocation,
            findNearbyPlaces
        }}
      >
      {children}
      </GoogleAPIContext.Provider>  
    );
  }