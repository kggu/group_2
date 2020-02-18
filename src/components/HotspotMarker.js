import React from "react";
import Logo from "../logo.png";

const HotspotMarker = () => {
  const size = 30;
  return (
    <div>
      <img src = {Logo}
      width = {size}
      height = {size}
      style={{
          cursor: "pointer",
          fill: "#d00",
          stroke: "none",
          transform: `translate(${-size / 2}px,${-size}px)`
          }}></img>
    </div>
  );
};

export default HotspotMarker;
