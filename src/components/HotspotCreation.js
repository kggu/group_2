import React, { useState, useEffect } from "react";
import { useBackendAPI } from "../utils/backendAPI"
import { useGoogleAPI } from "../utils/googleAPI"
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"

const HotspotCreation = props => {

    const { createNewHotSpot } = useBackendAPI();
    const { foundSuggestions } = useGoogleAPI();

    const [ suggestions, setSuggestions ] = useState();
    const [ showSuggestions, setShowSuggestion ] = useState(false)
    const [ openingHours, setOpeningHours] = useState([]);

    useEffect(() => {
        setSuggestions(foundSuggestions)
    }, [foundSuggestions]);

    useEffect(() => {
        if (suggestions && suggestions.length > 1) {
            setShowSuggestion(true)
        }
    }, [suggestions]);

    const handleChangeSuggestion = (e) => {

        //TODO: Work-in-progress, only updates name value

        const selectedIndex = e.target.value
        const mainForm = e.target.parentNode.parentNode.parentNode
        const selectedSuggestion = suggestions[e.target.value]
        console.log(selectedSuggestion)
        mainForm.formGridName.value = selectedSuggestion.name
    }

    const handleSubmit = (e) => {
        const [longitude, latitude] = props.lngLat
        e.preventDefault();
        const NewHotspot = {
            name: e.target.formGridName.value,
            description: e.target.formDescription.value,
            address: {
                address: e.target.formGridAddress.value,
                postalCode: e.target.formGridZip.value,
                city: e.target.formGridCity.value,
                country: e.target.formGridCountry.value
            },
            category: e.target.formCategory.value,
            location: {
                longitude: longitude.longitude,
                latitude: longitude.latitude
            },
            
            openingHours: openingHours()
        };
        console.log(NewHotspot)
        console.log(foundSuggestions)
        createNewHotSpot(NewHotspot);
        props.onHide();
    }

    const handleOpeningHours = (e) => {
        e.preventDefault();
        setOpeningHours([{
            weekDay: e.target.formWeekDay.value,
            openingTime: e.target.formOpeningTime.value,
            closingTime: e.target.formClosingtime.value
        }])
    };

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
                    {showSuggestions && (<Form.Row>
                        <Form.Group controlId="formSuggestions">
                            <Form.Label>Suggestions</Form.Label>
                            <Form.Control as="select" onChange={handleChangeSuggestion}>
                                {
                                    suggestions.map((option, index) => {
                                        return (<option value={index} key={option.id} >{option.name}</option>)
                                    })
                                }
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>)}

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" />
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
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
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

                        <Button variant="primary" onClick={handleOpeningHours}>Save</Button>
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