import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useBackendAPI } from "../../../utils/backendAPI";
import { StarRating } from "./StarRating";

const HotspotRating = (props) => {
  const {
    rateHotspot,
    rateHotSpotResolved,
    getHotspotWithSlug,
    selectedHotspot,
  } = useBackendAPI();
  const [ratingSent, setRatingSent] = useState(false);

  const [ratingCount, setRatingCount] = useState(0);
  const [userRating, setUserRating] = useState();
  const [hasRatings, setHasRatings] = useState(false);

  useEffect(() => {
    if (props.ratings) setRatingCount(props.ratings.length);
    if (props.ratings.length > 0) {
      setHasRatings(true);
    }
  }, []);

  useEffect(() => {
    setRatingSent(false);
  }, [selectedHotspot]);

  const _handleChange = (starsSelected) => {
    setUserRating(starsSelected);
  };

  const _rateHotspot = () => {
    const rating = {
      rating: userRating,
    };
    setRatingSent(true);
    rateHotspot(rating, props.slug);
  };

  useEffect(() => {
    if (
      ratingSent &&
      rateHotSpotResolved &&
      rateHotSpotResolved.status == 200
    ) {
      getHotspotWithSlug(props.slug);
    }
  }, [rateHotSpotResolved]);

  return (
    <div className="hotspot-rating">
      {!hasRatings && <a>No ratings yet. Be the first one!</a>}
      {hasRatings && <a>Average rating: {props.ratingAverage}</a>}

      <br />
      {hasRatings && <a>Rated by {ratingCount} students</a>}

      <div className="rating-actions">
        <StarRating onChange={_handleChange} totalStars={5} />
        {/*  <input onChange={_handleChange} className="test" type="text"></input>*/}
        <Button onClick={_rateHotspot} variant="" className="rate-button-test">
          rate
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
