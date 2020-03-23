import React from "react";
import { Image, Row, Button, InputGroup, FormControl } from "react-bootstrap";

const Comment = props => {
  return (
    <Row>
      <InputGroup>
        <Image className="user-img" src={props.userPicture} rounded></Image>
        <div className="comment-details">
          <p className="comment-info">{props.userName} on 18.3.2020</p>
          <FormControl
            className="comment-form rounded"
            aria-describedby="basic-addon1"
          />
        </div>
      </InputGroup>
    </Row>
  );
};

export default Comment;
