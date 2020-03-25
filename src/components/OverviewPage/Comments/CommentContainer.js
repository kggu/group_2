import Comment from "./Comment";
import PostComment from "./PostComment";
import React from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import "./comments.css";

const CommentContainer = props => {
  const { loading, user, isAuthenticated } = useAuth0();
  const totalComments = 2;

  //TODO: add proper view if user is not logged in
  //      add proper loading view
  //      add styling for comments-header
  //      fetch data from api

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <div className="border-custom comments-header">
        <p>Comments ({totalComments})</p>
      </div>
      <div className="comments">
        <Comment userName={user.name} userPicture={user.picture} />
        <Comment userName={user.name} userPicture={user.picture} />
      </div>
      <div className="postComment">
        {isAuthenticated ? (
          <PostComment userName={user.name} userPicture={user.picture} />
        ) : (
          <p> You must be logged in to post comments.</p>
        )}
      </div>
    </div>
  );
};

export default CommentContainer;
