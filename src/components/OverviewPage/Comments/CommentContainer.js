import Comment from "./Comment";
import PostComment from "./PostComment";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import "./comments.css";

const CommentContainer = (props) => {
  const { loading, user, isAuthenticated } = useAuth0();
  const [comments, setComments] = useState();
  let totalComments = 0;

  const parseLocalTime = (timeString) => {
    return timeString.slice(0, 10) + " " + timeString.slice(11, 19);
  };

  useEffect(() => {
    if (props.comments) {
      _mapComments();
    }
  }, []);

  const _mapComments = () => {
    if (props.comments.length == 0 || !props.comments) {
      return;
    }

    props.comments.sort((a,b) => a.createdAt < b.createdAt);

    setComments(
      props.comments.map(function (comment) {
        return (
          <Comment
            commentText={comment.text}
            userName={comment.user.name}
            userPicture={comment.user.picture}
            createdAt={parseLocalTime(comment.createdAt)}
          />
        );
      })
    );
  };

  if (loading) {
    return <div className="text-center">loading...</div>;
  }

  return (
    <div className="">
      <div className="border-custom comments-header">
        <a>Comments {comments !== undefined && comments.length}</a>
      </div>
      <div className="comments">
        {comments}
        {comments === undefined && (
          <div className="text-center"> No comments yet..</div>
        )}
      </div>
      <div className="postComment">
        {isAuthenticated ? (
          <PostComment slug={props.slug} userName={user.name} userPicture={user.picture} />
        ) : (
          <p> You must be logged in to post comments.</p>
        )}
      </div>
    </div>
  );
};

export default CommentContainer;
