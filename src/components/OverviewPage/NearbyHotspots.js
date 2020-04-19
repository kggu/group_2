import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Badge, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./NearbyHotspots.css";
import { useBackendAPI } from "../../utils/backendAPI";

const NearbyHotspots = (props) => {
  const [nearbyHotspots, setNearbyHotspots] = useState();
  const [hotspotList, mapHotspotList] = useState();
  const { selectedHotspot } = useBackendAPI();

  const searchRange = 200;
  let hasNearbyPlaces = true;

  useEffect(() => {
    getNearbyHotspots(props.location.longitude, props.location.latitude);
  }, []);

  useEffect(() => {
    if (nearbyHotspots) {
      if (nearbyHotspots.length == 1) {
        // Check for 1 because data always contains current hotspot
        hasNearbyPlaces = false;
      }
      _mapNearbyHotspots();
    }
  }, [nearbyHotspots, selectedHotspot]);

  const getNearbyHotspots = async (lng, lat) => {
    const address =
      process.env.REACT_APP_API_ROOT +
      "/hotspot/search?longitude=" +
      lng +
      "&latitude=" +
      lat +
      "&range=" +
      searchRange;

    console.log(address);
    const response = await axios.get(address).then((response) => {
      console.log(response.data);
      setNearbyHotspots(response.data);
    });
  };

  const _mapNearbyHotspots = () => {
    mapHotspotList(
      nearbyHotspots
        .filter(function (spot) {
          // Filter current hotspot showing in nearby-hotspot list
          if (spot.slug === props.currentHotspot) {
            return false;
          }
          return true;
        })
        .map(function (spot) {
          return (
            <Link to={"/hotspot/" + spot.slug}>
              <li className="hotspot-item">{spot.name}</li>
            </Link>
          );
        })
    );
  };

  return (
    <div>
      <div className="nearby-header text-center">
        <a>Nearby hotspots</a>
      </div>

      {!hasNearbyPlaces && (
        <div className="hotspot-item">No nearby places.</div>
      )}

      {hasNearbyPlaces && (
        <div className="nearby-list">
          <ul>{hotspotList}</ul>
        </div>
      )}
    </div>
  );
};

export default NearbyHotspots;
