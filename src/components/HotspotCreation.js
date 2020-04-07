import React, { useState, useEffect } from "react";
import { useBackendAPI } from "../utils/backendAPI"
import { useGoogleAPI } from "../utils/googleAPI"
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"

const HotspotCreation = props => {

    const { createNewHotSpot, hotSpotCreationResolved } = useBackendAPI();
    const { foundSuggestions, findDetails, foundDetailedSuggestionInfo } = useGoogleAPI();

    const [ suggestions, setSuggestions ] = useState();
    const [ showSuggestions, setShowSuggestion ] = useState(false)
    const [ openingHours, setOpeningHours] = useState([]);

    const [ awaitingResponse, setAwaitingResponse ] = useState(false)
    const [ loadingStatus, setLoadingStatus ] = useState(false);

    const [ name, setName ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ city, setCity ] = useState('');
    const [ zip, setZip ] = useState('');
    const [ country, setCountry ] = useState('');
    
    useEffect(() => {
        setLoadingStatus(false)
        setAwaitingResponse(false)
        setName('');
        setAddress('');
        setCity('');
        setZip('');
        setCountry('');
    }, [props.lngLat])

    useEffect(() => {
        setSuggestions(foundSuggestions)
    }, [foundSuggestions]);

    useEffect(() => {
        if (suggestions && suggestions.length > 1) {
            setShowSuggestion(true)
        }
    }, [suggestions]);

    const handleChangeSuggestion = (e) => {
        const selectedIndex = e.target.value
        const selectedSuggestion = suggestions[selectedIndex]
        console.log(selectedSuggestion)
        findDetails(selectedSuggestion.place_id)
    }

    useEffect(() => {
        if (foundDetailedSuggestionInfo) {
            const newDetails = foundDetailedSuggestionInfo;
            setName(newDetails.name);
            setAddress(newDetails.address);
            setCity(newDetails.city);
            setZip(newDetails.zip);
            setCountry(newDetails.country);
        }
    }, [foundDetailedSuggestionInfo])


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
            
            openingHours: openingHours
        };
        console.log(NewHotspot)
        console.log(foundSuggestions)
        createNewHotSpot(NewHotspot);
        setAwaitingResponse(true)
        setLoadingStatus(true)
        //props.onHide();
    }

    useEffect(() => {
        if (loadingStatus) {
            setLoadingStatus(false)
        }
    },[hotSpotCreationResolved])

    const handleOpeningHours = (e) => {
        e.preventDefault();
        setOpeningHours([{
            weekDay: e.target.formWeekDay.value,
            openingTime: e.target.formOpeningTime.value,
            closingTime: e.target.formClosingtime.value
        }])
    };
    
    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }

    const handleChangeZip = (e) => {
        setZip(e.target.value)
    }

    const handleChangeCountry = (e) => {
        setCountry(e.target.value)
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
                {!awaitingResponse && (<Form onSubmit={handleSubmit}>

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
                            <Form.Control type="name" value ={name} onChange={handleChangeName}></Form.Control>
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
                        <Form.Control value={address} onChange={handleChangeAddress}/>
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
                        <Form.Control value={city} onChange={handleChangeCity} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control value={zip} onChange={handleChangeZip}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control value={country} onChange={handleChangeCountry}/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                )}

                {awaitingResponse && loadingStatus && ( <Spinner animation="border" role="status"> </Spinner> )}

                {awaitingResponse && !loadingStatus && ( <Alert variant="success">
                    <Alert.Heading>HotSpot successfully created</Alert.Heading>
                </Alert>
                )}

                </p>
            </Modal.Body>
        </Modal>
    );
}

export default HotspotCreation;