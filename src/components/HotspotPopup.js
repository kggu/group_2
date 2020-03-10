import { Popup } from "react-map-gl";
import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const HotspotPopup = props => {
  return (
    <Popup
      tipSize={5}
      anchor="bottom"
      longitude={25.473}
      latitude={65.013}
      closeButton={false}
      offsetTop={-25}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Subway Linnanmaa</Card.Title>
          <Card.Text>Subway Oulun Yliopiston tiloissa</Card.Text>

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
          <Link to="/hotspot">
          <Button variant="orange">Overview</Button>
          </Link>
        </Card.Body>
      </Card>
    </Popup>
  );
};

export default HotspotPopup;
