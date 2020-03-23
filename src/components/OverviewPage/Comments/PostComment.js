import React from "react";
import { Image, Row, Button, InputGroup, FormControl } from "react-bootstrap";

const PostComment = props => {
  return (
    <Row>
      <InputGroup>
        <Image className="user-img" src={props.userPicture} rounded></Image>
        <div className="comment-details">
          <p className="comment-info">Commenting as {props.userName}</p>
          <FormControl
            className="comment-form rounded"
            aria-describedby="basic-addon1"
          />
        </div>
        <Button variant="submit-button" className="submit-button">
          post
        </Button>
      </InputGroup>
    </Row>
  );
};

export default PostComment;
