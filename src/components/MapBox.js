import React, { useState, useEffect } from "react";
import axios from "axios";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import HotspotMarker from "./HotspotMarker";
import HotspotPopup from "./HotspotPopup";
import SideBar from "./SideBar";

const Map = props => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 700,
    latitude: 65.0611,
    longitude: 25.466305,
    zoom: 16
  });

  useEffect(() => {
    updateViewportFromCoordinates(props.match.params.lat, props.match.params.lng);
  }, [props.match.params.lat, props.match.params.lng]);

  const updateViewportFromCoordinates = (lat, lng) => {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    if (!(isNaN(lat) || isNaN(lng))) {
      if (lat < 90 && lat > -90) {
        setViewPort({...viewport, latitude: lat, longitude: lng})
      }
    }
  };

  const _onViewportChange = viewport =>
    setViewPort({ ...viewport});

  const [render, setRender] = useState(false);
  const [data, setData] = useState();
  const [markers, setMarkers] = useState();
  const [selectedMarker, setSelectedMarker] = useState();

  const _onClickMarker = clickedMarker => {
    if (clickedMarker === selectedMarker) {
      //if user clicks same marker again
      setSelectedMarker("");
      setRender(false);
      return;
    }

    setSelectedMarker(clickedMarker);

    if (!render) {
      setRender(true);
    }
  };

  const GetHotspots = async () => {
    const address =
      process.env.REACT_APP_API_ROOT +
      "/hotspot/search?longitude=" +
      0 +
      "&latitude=" +
      0 +
      "&range=" +
      500000000;
    const response = await axios.get(address);
    console.log(response.data);
    setData(response.data);
  };

  const loadMarkers = () => {
    setMarkers(
      data.map(spot => {
        return (
          <Marker
            key={spot.slug}
            latitude={parseFloat(spot.location.latitude)}
            longitude={parseFloat(spot.location.longitude)}
          >
            {render && spot.slug == selectedMarker && (
              <HotspotPopup
                longitude={parseFloat(spot.location.longitude)}
                latitude={parseFloat(spot.location.latitude)}
                name={spot.name}
                description={spot.description}
                slug={spot.slug}
              />
            )}
            <HotspotMarker handler={_onClickMarker} slug={spot.slug} />
          </Marker>
        );
      })
    );
  };

  useEffect(() => {
    GetHotspots();
  }, []);

  useEffect(() => {
    if (data) {
      loadMarkers();
    }
  }, [selectedMarker, render, data]);

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
          {markers}
        </MapGL>
      </div>
    </div>
  );
};

export default Map;
