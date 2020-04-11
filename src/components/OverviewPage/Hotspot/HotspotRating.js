import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useBackendAPI } from "../../../utils/backendAPI";

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

export default HotspotRating;
