import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";

export const BackendAPIContext = React.createContext();

export const useBackendAPI = () => useContext(BackendAPIContext);

export const BackendAPIProvider = ({children}) => {
  const { getTokenSilently } = useAuth0();
  
  const [hotSpots, setHotSpots] = useState();
  const [hotspotCategories, setHotspotCategories] = useState();

  const [selectedCategory, setSelectedCategory] = useState("");

  const [hotSpotCreationResolved, setHotSpotCreationResolved] = useState();


  //debug, remove later
  useEffect(() => {
    console.log("updated:" + selectedCategory);
}, [selectedCategory]);

  
  const [requestedRange, setRequestedRange] = useState(0)
  const [hotSpotUpdateStatus, setHotSpotUpdateStatus ] = useState(false);
  const [requestedViewport, setRequestedViewport] = useState({
    width: "100%",
    height: window.innerHeight,
    latitude: 65.013,
    longitude: 25.47,
    zoom: 35 
  });

  const checkHotSpotRange = async (viewport) => {
    const distance = Math.abs(
      Math.acos(
      Math.sin(viewport.latitude * Math.PI/180.0) * Math.sin(requestedViewport.latitude * Math.PI/180.0)
      + Math.cos(viewport.latitude * Math.PI/180.0) * Math.cos(requestedViewport.latitude * Math.PI/180.0)
      * Math.cos(requestedViewport.longitude * Math.PI/180.0 - viewport.longitude * Math.PI/180.0)
      ));
    const distanceInMeters = distance * 6731000;
    //console.log(distanceInMeters)
    //console.log(requestedRange)
    if (distanceInMeters > requestedRange / 2) {
      setHotSpotUpdateStatus(true)
    }
  }

  const updateHotSpots = async (viewport) => {
    console.log(viewport)
    //setHotSpotUpdateStatus(false)
    setRequestedViewport(viewport)
    const lng = viewport.longitude
    const lat = viewport.latitude
    const zoom = viewport.zoom
    let range = 78271.484 / (Math.pow(2,zoom)) * 2048
    setRequestedRange(range)
    range = parseInt(range)
    console.log(range)
    const address =
      process.env.REACT_APP_API_ROOT +
      "/hotspot/search?longitude=" +
      lng +
      "&latitude=" +
      lat +
      "&range=" +        
      range + 
      "&category=" +
      selectedCategory;

    console.log(address);
    const response = await axios.get(address).then( response => {
      console.log(response)
      setHotSpots(response.data)
    });
  };

  const getHotspotCategories = async () => {
    const address =
    process.env.REACT_APP_API_ROOT + "/hotspot/categories"
    const response = await axios.get(address);
    console.log(response.data);
    setHotspotCategories(response.data);
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

    const response = await axios.post(address, request, axiosConfig).then( response => {
      setHotSpotCreationResolved(response)
      console.log(response)
    });
  };

  useEffect(() => {
      getHotspotCategories()
  }, []); 
    
  return (
    <BackendAPIContext.Provider
      value={{
          updateHotSpots,
          hotSpots,
          hotSpotUpdateStatus,
          hotspotCategories,
          selectedCategory,
          setSelectedCategory,
          checkHotSpotRange,
          createNewHotSpot,
          setHotSpotUpdateStatus,
          hotSpotCreationResolved
      }}
    >
    {children}
    </BackendAPIContext.Provider>  
  );
}