import React, { useEffect, useState } from "react";
import { Image, Button, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HotspotInfo.css";
import { useBackendAPI } from "../../utils/backendAPI";

const HotspotInfo = (props) => {
  const parseLocalTime = (timeString) => {
    return timeString.slice(0, 10) + " " + timeString.slice(11, 19);
  };

  const creationDate = parseLocalTime(props.hotspotInfo.createdAt);

  useEffect(() => {
    console.log(props.hotspotInfo.ratings);
  }, []);

  return (
    <div className="cont">
      <div className="hotspot-header">
        <div>
          <a>{props.hotspotInfo.name}</a>
        </div>
      </div>
      <div className="hotspot-info">
        <div className="hotspot-address">
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>{" "}
              {props.hotspotInfo.address.address}
              {","} {props.hotspotInfo.address.postalCode}{" "}
              {props.hotspotInfo.address.city}
            </li>
            <li>
              <i class="fas fa-flag"></i>
              {props.hotspotInfo.address.country}
            </li>
          </ul>
          <div className="hotspot-creator-info">
            Created by {props.hotspotInfo.creator.nickname} <br />
            {/* <Image src={props.hotspotInfo.creator.picture}/>  <br />*/}
            <small>{creationDate}</small>
          </div>
          <div className="hotspot-link">
            <Link
              to={
                "/map/" +
                props.hotspotInfo.location.latitude +
                "/" +
                props.hotspotInfo.location.longitude +
                "/16"
              }
            >
              <Button className="view-button" variant="customorange">
                Show on map
              </Button>
            </Link>
          </div>
        </div>
        <HotspotRating
          ratingAverage={props.hotspotInfo.ratingAverage}
          ratings={props.hotspotInfo.ratings}
          slug={props.hotspotInfo.slug}
        />

        <HotspotActions />
      </div>
    </div>
  );
};

const HotspotRating = (props) => {
  const { rateHotspot } = useBackendAPI();
  const [userRating, setUserRating] = useState();

  const _handleChange = (e) => {
    setUserRating(e.target.value);
  };

  const _rateHotspot = () => {
    const rating = {
      rating: userRating,
    };
    rateHotspot(rating, props.slug);
  };

  return (
    <div className="hotspot-rating">
      <a>
        Average rating: {props.ratingAverage}
        <br></br>
      </a>
      <a>Rated by {props.ratings.length} students</a>
      <div className="rating-test">
        <input onChange={_handleChange} className="test" type="text"></input>
        <Button onClick={_rateHotspot} variant="" className="rate-button-test">
          test (0-5)
        </Button>
      </div>
      <div className="rated-by">
        {props.ratings.map(function (rating) {
          return (
            <div>
              {rating.creator.nickname}: {rating.rating}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StarRating = (props) => {};

const HotspotActions = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const _renderTooltip = (msg) => {
    return <Tooltip id="button-tooltip">{msg}</Tooltip>;
  };

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
          <Button variant="danger" onClick={props.onHide}>
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

export default HotspotInfo;
