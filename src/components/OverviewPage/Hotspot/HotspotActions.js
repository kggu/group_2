import React, { useState } from "react";
import { Button, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";

const HotspotActions = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const _renderTooltip = (msg) => {
    return <Tooltip id="button-tooltip">{msg}</Tooltip>;
  };

  //TODO: add backend request when endpoint is implemented.
  const ReportHotspotModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>Report hotspot</h4>
          <a>Are sure you want to report this Hotspot?</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => props.onHide()}>
            Report
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="hotspot-actions">
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 100 }}
        overlay={_renderTooltip("Report this hotspot")}
      >
        <Button
          onClick={() => setModalShow(true)}
          className="action-button"
          variant=""
        >
          <i className="fas fa-trash"></i>
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 100 }}
        overlay={_renderTooltip("Suggest a change")}
      >
        <Button className="action-button" variant="">
          <i className="fas fa-pen"></i>
        </Button>
      </OverlayTrigger>
      <ReportHotspotModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default HotspotActions;
