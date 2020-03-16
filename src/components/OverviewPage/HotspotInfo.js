import React from "react";
import { ListGroup } from "react-bootstrap";

const HotspotInfo = props => {
  return (
    <ListGroup variant="" className="custombg-primary">
      <ListGroup.Item>
        Created by {props.hotspotInfo.creator.name}
      </ListGroup.Item>
      <ListGroup.Item>
        {props.hotspotInfo.address.address}, {props.hotspotInfo.address.city},{" "}
        {props.hotspotInfo.address.postalCode},{" "}
        {props.hotspotInfo.address.country}
      </ListGroup.Item>
      <ListGroup.Item>{props.hotspotInfo.slug}</ListGroup.Item>
    </ListGroup>
  );
};

export default HotspotInfo;
