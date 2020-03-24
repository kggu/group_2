import Comment from "./Comment";
import PostComment from "./PostComment";
import React, { Fragment } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import "./comments.css";

const CommentContainer = props => {
  const { loading, user } = useAuth0();
  const totalComments = 2;

  //temporary
  if (loading || !user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <div className="border-custom comments-header">
        <p>Comments ({totalComments})</p>
      </div>
      <div className="comments">
        <Comment userName={user.name} userPicture={user.picture}/>
        <Comment userName={user.name} userPicture={user.picture}/>
      </div>
      <div className="postComment">
        <PostComment userName={user.name} userPicture={user.picture} />
      </div>
    </div>
  );
};

export default CommentContainer;
