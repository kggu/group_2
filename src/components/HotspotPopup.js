import { Popup } from "react-map-gl";
import React from "react";
import { Link } from "react-router-dom";

import "./popup.css";

const HotspotPopup = props => {
  return (
    <Popup
      tipSize={5}
      anchor="bottom"
      longitude={25.473}
      latitude={65.013}
      closeButton={false}
      offsetTop={-25}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Place name</h5>
          <p className="card-text text-style-light">
            Place description
          </p>
          <Link to="">
            <button className="btn custombtn custombg-orange text-light">
              Overview
            </button>
          </Link>
        </div>
      </div>
    </Popup>
  );
};

export default HotspotPopup;
