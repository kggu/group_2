import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Badge, Row, Col } from "react-bootstrap";
import axios from "axios";

const NearbyHotspots = (props) => {
  const [nearbyHotspots, setNearbyHotspots] = useState();
  const [hotspotList, mapHotspotList] = useState();
  const searchRange = 500;

  useEffect(() => {
    getNearbyHotspots(props.location.longitude, props.location.latitude);
  }, []);

  useEffect(() => {
    if (nearbyHotspots) {
      _mapNearbyHotspots();
    }
  }, [nearbyHotspots]);

  const getNearbyHotspots = async (lng, lat) => {
    console.log(lng + " " + lat);
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
      nearbyHotspots.map(function (spot) {
        return <div>{spot.name}</div>;
      })
    );
  };

  return <div>{hotspotList}</div>;
};

export default NearbyHotspots;
