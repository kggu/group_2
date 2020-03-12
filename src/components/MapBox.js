import React, { Redirect, useState, useEffect} from "react";
import MapGL, { Marker,Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import HotspotMarker from "./HotspotMarker";
import HotspotPopup from './HotspotPopup';
import SideBar from "./SideBar";

const Map = props => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 700,
    latitude: 65.013,
    longitude: 25.47,
    zoom: 16
  });

  const [urlError, setUrlError] = useState(false);

  useEffect(() => {
    updateViewportFromCoordinates(props.match.params.lat, props.match.params.lng);
  }, []);

  const updateViewportFromCoordinates = (lat, lng) => {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    console.log(lat);
    console.log(lng);
    if (!(isNaN(lat) || isNaN(lng))) {
      if (lat < 90 && lat > -90) {
        setViewPort({...viewport, latitude: lat, longitude: lng})
      }
    }
  };

  const _onViewportChange = viewport =>
    setViewPort({ ...viewport});

  const [render, setRender] = useState(false);
   
  const _onClickMarker = () => {
    setRender(true);
  };
  
  if (urlError) {
    return null
  } else {
    return (
    <div className="container-fluid testclass">
      <div className="col-md-2 d-none d-md-block bg-light sidebar-4">
      <SideBar />
      </div>
      <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <MapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/t8hosa01/ck6q8al1o1ty61io620yyt0o1"
          onViewportChange={_onViewportChange}
          onClick={() => setRender(false)}
        >
          {render &&(<HotspotPopup  ></HotspotPopup>)}
          <Marker longitude={25.473} latitude={65.013}>
            
            <HotspotMarker handler={_onClickMarker}>

           
            </HotspotMarker>
          </Marker>
        </MapGL>
      </div>
      </div>
  );
  }
};

export default Map;
