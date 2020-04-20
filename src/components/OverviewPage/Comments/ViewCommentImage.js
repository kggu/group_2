import React, { useState, useEffect } from "react";
import {Modal, Button} from 'react-bootstrap';

const ViewCommentImage = (props) => {
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
        <h4 className="text-center">Full-resolution image goes here.</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewCommentImage;
