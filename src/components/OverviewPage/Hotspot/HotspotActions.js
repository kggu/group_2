import React, { useState } from "react";
import {
  Button,
  OverlayTrigger,
  Tooltip,
  Modal,
  Form,
  Col,
  Alert,
} from "react-bootstrap";
import ReviewHotspotChanges from './EditHotspot'

const HotspotActions = (props) => {
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  // CHANGE THESE NAMES LATER !!!!
  // WORK IN PROGRESS

  const _renderTooltip = (msg) => {
    return <Tooltip id="button-tooltip">{msg}</Tooltip>;
  };

  const EditHotspotModal = (props) => {
    //console.log(props);

    props.hotspotData.openingHours.forEach((weekday) => {
      //console.log(weekday);
    });


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit hotspot
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  value={props.hotspotData.name}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                  <option>FOOD</option>
                  <option>SPORTS</option>
                  <option>DRINKS</option>
                  <option>ARTS</option>
                  <option>KNOWLEDGE</option>
                  <option>MUSIC</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={props.hotspotData.description}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control value={props.hotspotData.address.address} />
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="formWeekDay">
                <Form.Label>Day of week</Form.Label>
                <Form.Control as="select">
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formOpeningTime">
                <Form.Label>Opening Hours</Form.Label>
                <Form.Control placeholder="XX:XX" />
              </Form.Group>

              <Form.Group as={Col} controlId="formClosingTime">
                <Form.Label>Closing Hours</Form.Label>
                <Form.Control placeholder="XX:XX" />
              </Form.Group>

              <Button variant="primary">Save</Button>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control value={props.hotspotData.address.city} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control value={props.hotspotData.address.postalCode} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control value={props.hotspotData.address.country} />
              </Form.Group>
            </Form.Row>

            <Button
              onClick={() => {
                setModalShow3(true);
                setModalShow2(false);
              }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div className="hotspot-actions">
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 100 }}
        overlay={_renderTooltip("Suggest a change")}
      >
        <Button
          onClick={() => setModalShow2(true)}
          className="action-button"
          variant=""
        >
          <i className="fas fa-pen"></i>
        </Button>
      </OverlayTrigger>
      <EditHotspotModal
        hotspotData={props.hotspotData}
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
      <ReviewHotspotChanges
        hotspotData={props.hotspotData}
        show={modalShow3}
        onHide={() => setModalShow3(false)}
      />
    </div>
  );
};

export default HotspotActions;