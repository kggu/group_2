import React from "react";
import { ListGroup } from "react-bootstrap";

const HotspotInfo = props => {
  return (
    <div>
            <div className="hotspot-header">
        <div>{props.hotspotInfo.name}</div>

      </div>
    <div className="hotspot-info">

      <div className="hotspot-address">
        {" "}
        {props.hotspotInfo.address.address},
        <br></br>
        {props.hotspotInfo.address.postalCode} {props.hotspotInfo.address.city},{" "}
        {props.hotspotInfo.address.country}

      </div>
      <div>Created by {props.hotspotInfo.creator.name}</div>
    </div>
    </div>
  );
};

export default HotspotInfo;
