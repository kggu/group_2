import React, { useState, useEffect } from "react";
import "../frontpage.css";
import axios from "axios";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OverviewPage.css";
import OpeningHoursTable from "./OpeningHoursTable";
import HotspotInfo from "./HotspotInfo";
import NearbyHotspots from "./NearbyHotspots";

const OverviewPage = props => {
  const [hotspotData, setHotspotData] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    GetWithSlug(props.match.params.slug);
  }, []);

  const GetWithSlug = async slug => {
    try {
      const address = process.env.REACT_APP_API_ROOT + "/hotspot/" + slug;
      const response = await axios.get(address);
      console.log(response.data);
      setHotspotData(response.data);
    } catch (error) {
      console.log(error.response.status);
      setRequestError(error.response.status);
    }
  };

  // temporary solution for request errors.. clean this up later.
  if (requestError) {
    return (
      <Container fluid={true}>
        <Jumbotron className="jumbotronLuokka text-secondary">
          <h1>{requestError}</h1>
        </Jumbotron>
      </Container>
    );
  }

  if (!hotspotData) {
    return <div> loading...</div>;
  }

  // TODO: split into smaller components
  if (hotspotData)
    return (
      <Container>
        <Jumbotron className="text-center custombg-primary">
          <h1>{hotspotData.name}</h1>
          <p>{hotspotData.description}</p>
        </Jumbotron>
        <Row>
          <Col className="custombg-primary infoContainer rounded" md={{ span: 8 }}>
            <HotspotInfo hotspotInfo={hotspotData} />
            <div
              className="text-center"
              style={{ margin: "0 auto", marginTop: "1rem" }}
            >
              <Link
                to={
                  "/map/" +
                  hotspotData.location.latitude +
                  "/" +
                  hotspotData.location.longitude
                }
              >
                <Button variant="customorange">View</Button>
              </Link>
            </div>
          </Col>

          <Col className="containerClass rounded" md={{ span: 3, offset: 1 }}>
            <OpeningHoursTable openingHours={hotspotData.openingHours} />
          </Col>
        </Row>
        <Row>
          <Col className="nearbyContainer" md={{ span: 3, offset: 9 }}>
            <NearbyHotspots />
          </Col>
        </Row>
      </Container>
    );
};
export default OverviewPage;
