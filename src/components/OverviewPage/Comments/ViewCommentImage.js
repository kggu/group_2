import React, { useState, useEffect } from "react";
import { Modal, Button, Image } from "react-bootstrap";

const ViewCommentImage = (props) => {
  const [image, setImage] = useState();

  useEffect(() => {
    console.log("viewer: " + props.url);
    setImage(props.url);
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Comment image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image fluid src={image}></Image>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewCommentImage;
