import React, { useState, useEffect } from "react";
import { Image, Row } from "react-bootstrap";

const Comment = (props) => {
  const [thumbnail, setThumbnail] = useState("");
  const [hasPicture, setHasPicture] = useState(false);

  const params = "w_50,h_50/";

  useEffect(() => {
    if (props.commentImage) {
      setHasPicture(true);
    } else {
      console.log("no img")
    }
  }, []);

  //TODO: better string concation for parameters
  useEffect(() => {
    if (props.commentImage) {
      console.log(props.commentImage.imageUrl);
      const baseUrl = props.commentImage.imageUrl.slice(0, 49);
      const fileUrl = props.commentImage.imageUrl.slice(49);
      const thumb = baseUrl + params + fileUrl;
      setThumbnail(thumb);
      console.log("base url: " + baseUrl);
      console.log("file url: " + fileUrl);
      console.log("thumbnail: " + thumb);
    }
  }, [hasPicture]);

  return (
    <Row className="userComment">
      <Image className="user-img" src={props.userPicture} rounded></Image>
      <div className="comment-details">
        <p className="comment-info">
          {props.userName} on {props.createdAt}
        </p>
        <p className="comment-text">{props.commentText}</p>
      </div>
      {hasPicture && (
        <Image src={thumbnail} className="comment-picture"></Image>
      )}
    </Row>
  );
};

export default Comment;
