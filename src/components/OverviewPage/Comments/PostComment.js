import React, { useState } from "react";
import { Image, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import { useBackendAPI } from "../../../utils/backendAPI";

const PostComment = (props) => {
  const { createHotspotComment } = useBackendAPI();
  const [commentText, setCommentText] = useState("");

  const onTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const _postComment = () => {
      const comment = {
        text: commentText,
      };
      createHotspotComment(comment, props.slug);
      setCommentText("");
  };

  return (
    <Row>
      <InputGroup>
        <Image
          className="post-user-img"
          src={props.userPicture}
          rounded
        ></Image>
        <div className="comment-details">
          <p className="comment-info">Commenting as {props.userName}</p>
          <FormControl
            onChange={onTextChange}
            className="post-form rounded"
            as="textarea"
            rows="2"
          />
        </div>
        <Button
          variant="post-button"
          onClick={_postComment}
          className="post-button"
        >
          post
        </Button>
      </InputGroup>
    </Row>
  );
};

export default PostComment;
