import React from "react";
import { ListGroup } from "react-bootstrap";

const HotspotInfo = props => {
  const creationDate = props.hotspotInfo.createdAt;

  return (
      <ListGroup variant="">
      <ListGroup.Item className="">
        Created by {props.hotspotInfo.creator.name}
      </ListGroup.Item>
      <ListGroup.Item>
        {props.hotspotInfo.address.address},{" "}
        {props.hotspotInfo.address.postalCode} {props.hotspotInfo.address.city},{" "}
        {props.hotspotInfo.address.country}
      </ListGroup.Item>
      <ListGroup.Item>{props.hotspotInfo.category}</ListGroup.Item>
    </ListGroup>
  );
};

export default HotspotInfo;
