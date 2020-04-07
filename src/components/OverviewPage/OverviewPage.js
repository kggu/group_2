import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Jumbotron, Button, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../frontpage.css";
import "./OverviewPage.css";
import OpeningHoursTable from "./OpeningHoursTable";
import HotspotInfo from "./HotspotInfo";
import NearbyHotspots from "./NearbyHotspots";
import CommentContainer from "./Comments/CommentContainer";

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
      console.log(error);
      setRequestError(error);
    }
  };

  // temporary solution for request errors.. clean this up later.
  if (requestError) {
    return <div>{requestError}</div>;
  }

  if (!hotspotData) {
    return <div> loading...</div>;
  }

  // TODO: split into smaller components
  if (hotspotData)
    return (
      <Container>
        <Jumbotron className="custombg-primary text-center border-custom jumbotronStyle text-secondary">
          <h1 className="display-4">{hotspotData.name}</h1>
          <p>
            <Badge variant="secondary">{hotspotData.category}</Badge>{" "}
            {hotspotData.description}
          </p>
        </Jumbotron>
        <Row>
          <Col
            className="custombg-primary hotspotInfo-container rounded border-custom"
            md={8}
          >
            <HotspotInfo hotspotInfo={hotspotData} />
          </Col>
          <Col
            className="custombg-primary openingHours-container rounded border-custom"
            md={{ span: 3, offset: 1 }}
          >
            <OpeningHoursTable openingHours={hotspotData.openingHours} />
          </Col>
        </Row>
        <Row>
          <Col
            className="custombg-primary hotspotComments-container rounded border-custom"
            md={8}
          >
            <CommentContainer />
          </Col>
          <Col
            className=" custombg-primary nearbyHotspots-container rounded border-custom"
            md={{ span: 3, offset: 1 }}
          >
            <NearbyHotspots />
          </Col>
        </Row>
      </Container>
    );
};
export default OverviewPage;
