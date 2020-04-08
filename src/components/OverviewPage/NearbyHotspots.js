import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Badge, Row, Col } from "react-bootstrap";

// TODO get data from api, render 3-4 nearby hotspots
const NearbyHotspots = props => {
  return (
    <ListGroup variant="">
        <ListGroup.Item className="text-center">
            Nearby hotspots
        </ListGroup.Item>
      <Link to="/hotspot/subway-linnanmaa">
        <ListGroup.Item>
          <Row>
            <Col md="">
              <Badge variant="secondary">FOOD</Badge>
            </Col>
            <Col>
              <div>Subway linnanmaa</div>
            </Col>
          </Row>
        </ListGroup.Item>
      </Link>
      <Link to="/hotspot/paska-kaupunni">
        <ListGroup.Item>
          <Row>
            <Col md="">
              <Badge variant="secondary">ARTS</Badge>
            </Col>
            <Col>
              <div>Paska kaupunni</div>
            </Col>
          </Row>
        </ListGroup.Item>
      </Link>
    </ListGroup>
  );
};

export default NearbyHotspots;
