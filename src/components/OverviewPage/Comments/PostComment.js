import React, { useState } from "react";
import { Image, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import { useBackendAPI } from "../../../utils/backendAPI";

const PostComment = (props) => {
  const { createHotspotComment} = useBackendAPI();
  const [commentText, setCommentText] = useState("");
  const [commentFile, setCommentFile] = useState(null);

  const _onTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const _onfileChange = (e) => {
    console.log(e.target.files[0]);
    setCommentFile(e.target.files[0]);
  };

  const _postComment = () => {
    createHotspotComment(commentFile, props.slug, commentText);
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
            onChange={_onTextChange}
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
        <input type="file" id="input" onChange={_onfileChange} />
      </InputGroup>
    </Row>
  );
};

export default PostComment;
