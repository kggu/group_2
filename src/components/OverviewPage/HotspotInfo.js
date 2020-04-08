import React from "react";
import { Image, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HotspotInfo.css'

const HotspotInfo = (props) => {
  const parseLocalTime = (timeString) => {
    return timeString.slice(0, 10) + " " + timeString.slice(11, 19);
  };

  const renderTooltip = (msg) => {
    return <Tooltip id="button-tooltip">{msg}</Tooltip>;
  };

  const creationDate = parseLocalTime(props.hotspotInfo.createdAt);

  return (
    <div className="cont">
      <div className="hotspot-header">
        <div>
          <a>{props.hotspotInfo.name}</a>
        </div>
      </div>
      <div className="hotspot-info">
        <div className="hotspot-address">
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>{" "}
              {props.hotspotInfo.address.address}
              {","} {props.hotspotInfo.address.postalCode}{" "}
              {props.hotspotInfo.address.city}
            </li>
            <li>
              <i class="fas fa-flag"></i>
              {props.hotspotInfo.address.country}
            </li>
          </ul>
          <div className="hotspot-creator-info">
            Created by {props.hotspotInfo.creator.nickname} <br />
            {/* <Image src={props.hotspotInfo.creator.picture}/>  <br />*/}
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
              <Button className="view-button" variant="customorange">
                Show on map
              </Button>
            </Link>
          </div>
        </div>

        <div className="hotspot-rating">{/*TODO: rating controls*/}</div>
        <div className="hotspot-actions">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip("Report this hotspot")}
          >
            <Button className="vote-button" variant="">
              <i className="fas fa-trash"></i>
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip("Suggest a change")}
          >
            <Button className="vote-button" variant="">
              <i className="fas fa-pen"></i>
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    </div>
  );
};

export default HotspotInfo;
