import React, { useState } from "react";
import {
  Button,
  OverlayTrigger,
  Tooltip,
  Modal,
  Form,
  Col,
  Row,
  Alert,
} from "react-bootstrap";

const ReviewHotspotChanges = (props) => {
  console.log(props);

  return (
    <Modal
      {...props}
      size="lg"
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
              <Form.Row>
                <Form.Control
                  plaintext
                  value={props.hotspotData.name}
                />
              </Form.Row>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control plaintext value={">"} />
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Control plaintext value={"placeholder"} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control
                  plaintext
                  value={props.hotspotData.description}
                />
              </Form.Row>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control plaintext value={">"} />
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Control plaintext value={"placeholder"} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control
                  plaintext
                  value={props.hotspotData.category}
                />
              </Form.Row>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control plaintext value={">"} />
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Control plaintext value={"placeholder"} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control
                  plaintext
                  value={props.hotspotData.address.city}
                />
              </Form.Row>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control plaintext value={">"} />
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Control plaintext value={"placeholder"} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control
                  plaintext
                  value={props.hotspotData.address.address}
                />
              </Form.Row>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control plaintext value={">"} />
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Control plaintext value={"placeholder"} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control
                  plaintext
                  value={props.hotspotData.address.postalCode}
                />
              </Form.Row>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control plaintext value={">"} />
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Control plaintext value={"placeholder"} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control
                  plaintext
                  value={props.hotspotData.address.country}
                />
              </Form.Row>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Row>
                <Form.Control plaintext value={">"} />
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Control plaintext value={"placeholder"} />
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
