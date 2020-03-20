import React from "react";
import {
  Image,
  Col,
  Row,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";

const PostComment = props => {
  return (
    <Row>
      <InputGroup>
        <Image className="user-img" src={props.userPicture} rounded></Image>
        <FormControl className="comment-form rounded" aria-describedby="basic-addon1" />
        <Button variant="submit-button" className="submit-button">post</Button>
      </InputGroup>
    </Row>
  );
};

export default PostComment;
