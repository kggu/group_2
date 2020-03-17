import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"

const HotspotCreation = props => {

    const handleSubmit = (e) => {
        const [longitude, latitude] = props.lngLat
        e.preventDefault();
        const NewHotspot = {
            name: e.target.formGridName.value,
            description: e.target.fromDescription,
            address: {
                address: e.target.formGridAddress,
                postalcode: e.target.formGridZip,
                city: e.target.formGridCity,
                country: e.target.formGridCountry
            },
            category: e.target.formCategory.value,
            location: {
                longitude: longitude.longitude,
                latitude: longitude.latitude
            },
            openingHours: {
                weekday: e.target.formSelectDay,
                openingTime: e.target.formOpeningTime,
                closingTime: e.target.formClosingTime
            }
        } 
    }

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
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select">
                                <option>Food</option>
                                <option>Bar</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group controlId="formSelectDay">
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
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCountry">
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