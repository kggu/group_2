import React, { useState, useEffect } from "react";
import "./frontpage.css";
import axios from "axios";
import { Container, Jumbotron, Button } from "react-bootstrap";

const OverviewPage = props => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    GetWithSlug(props.match.params.slug);
  }, []);

  const GetWithSlug = async slug => {
    try {
      const address = process.env.REACT_APP_API_ROOT + "/hotspot/" + slug;
      const response = await axios.get(address);
      console.log(response.data);
      setData(response);
    } catch (error) {
      console.log(error.response.status);
      setError(error.response.status);
    }
  };

  // temporary solution for request errors.. clean this up later.
  if (error) {
    return (
      <Container fluid={true}>
        <Jumbotron className="jumbotronLuokka text-secondary">
          <h1>{error}</h1>
        </Jumbotron>
      </Container>
    );
  }

  if (!data) {
    return <div> loading...</div>;
  }

  if (data)
    return (
      <Container fluid={true}>
        <Jumbotron className="jumbotronLuokka text-secondary">
          <h1>{data.data.name}</h1>
          <p>
            {data.data.description} <br /> {data.data.location.longitude}{" "}
            {data.data.location.latitude} <br /> {data.data.slug}{" "}
          </p>
          <Button variant="secondary"> show on map</Button>
        </Jumbotron>
      </Container>
    );
};
export default OverviewPage;
