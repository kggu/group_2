import React from "react";
import Comment from "./Comment";

const CommentContainer = props => {
  return (
    <div className="border">
      <div className="border">
        <p>Comments (0)</p>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentContainer;
