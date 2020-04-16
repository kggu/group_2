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

const ReviewHotspotChanges = (props) => {
    console.log(props);

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Review changes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Row>
                <Form.Control plaintext value={props.hotspotData.address.city} />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control value={props.hotspotData.address.country} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control value={props.hotspotData.address.city} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control value={props.hotspotData.address.country} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control value={props.hotspotData.address.city} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control value={props.hotspotData.address.country} />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Request changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

  export default ReviewHotspotChanges;