import React, {useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useBackendAPI } from "../../utils/backendAPI";

const ReviewHotSpotChangesForm = (props) => {
    const [loading, setLoading] = useState(false);
    const [ oldData, setOldData ] = useState();

    const { findCurrentHotSpotDataFromSlug, currentHotSpotData } = useBackendAPI();

    const [city, setCity] = useState();
    const [address, setAddress] = useState();
    const [postalCode, setPostalCode] = useState();
    const [country, setCountry] = useState();

    useEffect(() => {
        setOldData();
        setLoading(true);
        findCurrentHotSpotDataFromSlug(props.newData.slug);
    },[])

    useEffect(() => {
        if (currentHotSpotData) {
            setLoading(false);

            setCity(props.newData.address.city);
            setAddress(props.newData.address.address);
            setPostalCode(props.newData.address.postalCode);
            setCountry(props.newData.address.country);

            setOldData(currentHotSpotData)
        }
    },[currentHotSpotData])



    return (
    <Modal
    {...props}
    size="xl"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Review changes
            </Modal.Title>
        </Modal.Header>
        {loading && ( <Spinner animation="border" role="status"> </Spinner> )}

        { oldData && (
            <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={"Name:"} />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control
                      plaintext
                      value={oldData.name}
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={">"} />
                  </Form.Row>
                </Form.Group>
    
                <Form.Group as={Col}>
                  <Form.Control plaintext value={props.newData.name} />
                </Form.Group>
              </Form.Row>
    
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={"Description:"} />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control
                      plaintext
                      value={oldData.description}
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Row>
                    <Form.Control plaintext value={">"} />
                  </Form.Row>
                </Form.Group>
    
                <Form.Group as={Col}>
                  <Form.Control plaintext value={props.newData.description} />
                </Form.Group>
              </Form.Row>
    
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={"Category:"} />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control
                      plaintext
                      value={oldData.category}
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={">"} />
                  </Form.Row>
                </Form.Group>
    
                <Form.Group as={Col}>
                  <Form.Control plaintext value={props.newData.category} />
                </Form.Group>
              </Form.Row>
    
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={"City"} />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control
                      plaintext
                      value={oldData.address.city}
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={">"} />
                  </Form.Row>
                </Form.Group>
    
                <Form.Group as={Col} >
                  <Form.Control plaintext value={city} />
                </Form.Group>
              </Form.Row>
    
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={"Address:"} />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control
                      plaintext
                      value={oldData.address.address}
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={">"} />
                  </Form.Row>
                </Form.Group>
    
                <Form.Group as={Col}>
                  <Form.Control plaintext value={address} />
                </Form.Group>
              </Form.Row>
    
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={"Postal code:"} />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control
                      plaintext
                      value={oldData.address.postalCode}
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={">"} />
                  </Form.Row>
                </Form.Group>
    
                <Form.Group as={Col}>
                  <Form.Control plaintext value={postalCode} />
                </Form.Group>
              </Form.Row>
    
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={"Country:"} />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control
                      plaintext
                      value={oldData.address.country}
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Row>
                    <Form.Control plaintext value={">"} />
                  </Form.Row>
                </Form.Group>
    
                <Form.Group as={Col}>
                  <Form.Control plaintext value={country} />
                </Form.Group>
              </Form.Row>
    
              
            </Form>
            <Button variant="primary" onClick={props.onAction}>
                {props.actionDescription}
            </Button>
          </Modal.Body>
        )}
    </Modal>
    )
};

export default ReviewHotSpotChangesForm;
