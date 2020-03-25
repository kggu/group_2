import React from "react";
import { Image, Row } from "react-bootstrap";

const Comment = props => {
  return (
    <Row className="userComment">
      <Image className="user-img" src={props.userPicture} rounded></Image>
      <div className="comment-details">
        <p className="comment-info">{props.userName} on 18.3.2020</p>
        <p className="comment-text">
          This is a comment about this specific hotspot. More text about this
          hotspot, and why it is a good hotspot. Maybe the user icon on the left
          could be smaller..? Where does the optional image fit here...?
        </p>
      </div>
    </Row>
  );
};

export default Comment;
