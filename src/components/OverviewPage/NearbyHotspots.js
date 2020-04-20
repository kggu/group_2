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

  const searchRange = 3000;
  let hasNearbyPlaces = true;

  useEffect(() => {
    console.log(selectedHotspot);
    getNearbyHotspots(props.location.longitude, props.location.latitude);
  }, []);

  useEffect(() => {
    if (nearbyHotspots) {
      _mapNearbyHotspots();
    }
  }, [nearbyHotspots, selectedHotspot]);

  //TODO: refactor this copy-pasted function
  //      SPLIT INTO SMALLER COMPONENETS

  function distance(lat1, lon1, lat2, lon2) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      let radlat1 = (Math.PI * lat1) / 180;
      let radlat2 = (Math.PI * lat2) / 180;
      let theta = lon1 - lon2;
      let radtheta = (Math.PI * theta) / 180;
      let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      return dist.toString().slice(0, 4) + "km";
    }
  }

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
        }).slice(0,5)
        .map(function (spot) {
          return (
            <li>
              <div className="hotspot-item text-center">
                <Link to={"/hotspot/" + spot.slug}>
                  <a>{spot.name}</a>
                </Link>
                <br></br>
                <Badge variant="secondary">{spot.category}</Badge>
                <small>
                  {" "}
                  {distance(
                    selectedHotspot.location.latitude,
                    selectedHotspot.location.longitude,
                    spot.location.latitude,
                    spot.location.longitude
                  )}
                </small>
              </div>
            </li>
          );
        })
    );
  };

  if (nearbyHotspots && nearbyHotspots.length == 1) {
    // Check for 1 because data always contains current hotspot
    hasNearbyPlaces = false;
  }

  return (
    <div>
      <div className="nearby-header text-center">
        <a>Nearby hotspots</a>
      </div>

      {!hasNearbyPlaces && (
        <div className="hotspot-item text-center">No nearby places.</div>
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
