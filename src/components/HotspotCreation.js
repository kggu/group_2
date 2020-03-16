import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"

const HotspotCreation = props => {
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Create Hotspot
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" value="Choose...">
                            <option>Food</option>
                            <option>Bar</option>
                            <option>...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Row>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formOpeningHours">
                        <Form.Label>Opening Hours</Form.Label>
                        <Form.Control placeholder="XX:XX" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formClosingHours">
                        <Form.Label>Closing Hours</Form.Label>
                        <Form.Control placeholder="XX:XX" />
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Country</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </p>
            </Modal.Body>
        </Modal>
    );
}

export default HotspotCreation;