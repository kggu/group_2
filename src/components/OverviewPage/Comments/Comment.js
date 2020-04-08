import React from "react";
import { Image, Row } from "react-bootstrap";

const Comment = props => {
  return (
    <Row className="userComment">
      <Image className="user-img" src={props.userPicture} rounded></Image>
      <div className="comment-details">
        <p className="comment-info">{props.userName} on {props.createdAt}</p>
        <p className="comment-text">
          {props.commentText}
        </p>
      </div>
    </Row>
  );
};

export default Comment;
