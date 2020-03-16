import { Popup } from "react-map-gl";
import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const HotspotPopup = (props) => {
  return (
    <Popup
      tipSize={5}
      anchor="bottom"
      closeButton={false}
      offsetTop={-30}
      longitude={props.longitude}
      latitude={props.latitude}
    >
      <Card style={{ width: "11rem" }}>
        <Card.Body>
          <>
            <style type="text/css">
              {`
              .btn-orange {
              background-color: #e8630a;
              color: white;
              }
            `}
            </style>
          </>
          <Link to="/hotspotcreation">
            <Button variant="orange" onClick={props.openHotspotCreation()}>
              Create Hotspot
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Popup>
  );
};

export default HotspotPopup;
