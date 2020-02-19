import { Popup } from "react-map-gl";
import React from "react";
import Logo from "../logo.png";

const HotspotPopup = () => {

  return (
    <Popup
      tipSize={5}
      anchor="top"
      longitude={25.473}
      latitude={65.013}
      closeOnClick={false}
    >
      <div>
        <p>test</p>
      </div>
    </Popup>
  );
};

export default HotspotPopup;
