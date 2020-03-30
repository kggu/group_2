import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export const GoogleAPIContext = React.createContext();

export const useGoogleAPI = () => useContext(GoogleAPIContext);

export const GoogleAPIProvider = ({children}) => {
    const [ storedLocation, setStoredLocation ] = useState();

    const google = window.google = window.google ? window.google : {}

    const storeLocation = (lng, lat) => {
        setStoredLocation({
            longitude: lng,
            latitude: lat
        })
    }

    const findNearbyPlaces = async () => {
        console.log(storedLocation.longitude)

        const location = new google.maps.LatLng(storedLocation.latitude, storedLocation.longitude)
        console.log(location)

        const map = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 15
        });

        var request = {
            location: location,
            radius: '500',
            type: ['point_of_interest']
        };
        
        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, foundSearchCallback);
    }

    const foundSearchCallback = (results, status) => {
        console.log(results)
        console.log(status)
    }

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