import React from "react";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HotspotInfo = props => {
  const parseLocalTime = timeString => {
    return timeString.slice(0, 10) + " " + timeString.slice(11, 19);
  };

  const creationDate = parseLocalTime(props.hotspotInfo.createdAt);

  return (
    <div>
      <div className="hotspot-header">
        <div>
          <a>{props.hotspotInfo.name}</a>
        </div>
      </div>
      <div className="hotspot-info">
        <div className="hotspot-address">
          <i className="fas fa-map-marker-alt"></i>
          {" "}{props.hotspotInfo.address.address}
          {","} {props.hotspotInfo.address.postalCode}{" "}
          {props.hotspotInfo.address.city}
          <br />
          <i class="far fa-flag"></i>
          {props.hotspotInfo.address.country} <br />
          <div className="hotspot-creator-info">
            {/*<Image src={props.hotspotInfo.creator.picture}*/} Created by{" "}
            {props.hotspotInfo.creator.nickname} <br />
            <small>{creationDate}</small>
          </div>
          <div className="hotspot-link">
            <Link
              to={
                "/map/" +
                props.hotspotInfo.location.latitude +
                "/" +
                props.hotspotInfo.location.longitude +
                "/16"
              }
            >
              <Button variant="customorange">View</Button>
            </Link>
          </div>
        </div>

        <div className="hotspot-rating">
          RATING GOES HERE
          <div className="voting-controls">
            <Button className="vote-button" onClick="" variant="">
              +
            </Button>
            <Button className="vote-button" onclick="" variant="">
              -
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotspotInfo;
