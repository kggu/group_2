import Comment from "./Comment";
import PostComment from "./PostComment";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import "./comments.css";
import { useBackendAPI } from '../../../utils/backendAPI'

const CommentContainer = (props) => {
  const { loading, user, isAuthenticated } = useAuth0();
  const [comments, setComments] = useState();
  let totalComments = 0;

  const {selectedHotspot} = useBackendAPI(); 

  const parseLocalTime = (timeString) => {
    return timeString.slice(0, 10) + " " + timeString.slice(11, 19);
  };

  useEffect(() => {
    if (props.comments) {
      _mapComments();
    }
  }, [selectedHotspot]);

  const _mapComments = () => {
    if (props.comments.length == 0 || !props.comments) {
      return;
    }

    props.comments.sort((a,b) => a.createdAt < b.createdAt);

    setComments(
      props.comments.map(function (comment) {

      console.log(comment)

        return (
          <Comment
            commentText={comment.text}
            commentImage={comment.photo}
            userName={comment.user.nickname}
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
          <PostComment slug={props.slug} userName={user.nickname} userPicture={user.picture} />
        ) : (
          <p> You must be logged in to post comments.</p>
        )}
      </div>
    </div>
  );
};

export default CommentContainer;
