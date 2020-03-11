import React, { useState } from "react";
import MapGL, { Marker,Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import HotspotMarker from "./HotspotMarker";
import HotspotPopup from './HotspotPopup';
import SideBar from "./SideBar";

const Map = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 700,
    latitude: 65.013,
    longitude: 25.47,
    zoom: 16
  });

  const _onViewportChange = viewport =>
    setViewPort({ ...viewport});

  const [render, setRender] = useState(false);

  const [placementMarker, setPlacementMarker] = React.useState([]);
   
  const _onClickMarker = () => {
    setRender(true);
  };

  const onClickMap = (e) => {
    const [longitude, latitude] = e.lngLat
    console.log(longitude, latitude);
	  setPlacementMarker(placementMarker => [...placementMarker, { longitude, latitude }]);
  };


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
          onClick = {onClickMap}
        >

        {placementMarker.map((m, i) => (
		      <Marker {...m} key={i}>
			      <HotspotMarker handler={_onClickMarker}></HotspotMarker>
		      </Marker>
        ))}

          {render &&(<HotspotPopup  ></HotspotPopup>)}
          <Marker longitude={25.473} latitude={65.013}>
            
            <HotspotMarker handler={_onClickMarker}>

           
            </HotspotMarker>
          </Marker>
        </MapGL>
      </div>
      </div>
  );
};

export default Map;
