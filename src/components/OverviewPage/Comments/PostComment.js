import React from "react";
import { Image, Row, Button, InputGroup, FormControl } from "react-bootstrap";

const PostComment = props => {
  return (
    <Row>
      <InputGroup>
        <Image className="post-user-img" src={props.userPicture} rounded></Image>
        <div className="comment-details">
          <p className="comment-info">Commenting as {props.userName}</p>
          <FormControl
            className="post-form rounded"
            as="textarea"
            rows="2"
          />
        </div>
        <Button variant="post-button" className="post-button">
          post
        </Button>
      </InputGroup>
    </Row>
  );
};

export default PostComment;
