import React, { useState } from "react";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import HotspotMarker from "./HotspotMarker";
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
    setViewPort({ ...viewport, transitionDuration: 500 });

  return (
    <div className="container-fluid testclass">
      <div className="col-md-2 d-none d-md-block bg-light sidebar-4">
      <SideBar />
      </div>
      <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <MapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={_onViewportChange}
        >
          <Marker longitude={25.473} latitude={65.013}>
            <HotspotMarker />
          </Marker>
        </MapGL>
      </div>
      </div>
  );
};

export default Map;
