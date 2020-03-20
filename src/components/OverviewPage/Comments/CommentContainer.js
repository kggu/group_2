import Comment from "./Comment";
import PostComment from "./PostComment"
import React, { Fragment } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import "./comments.css";


const CommentContainer = props => {

  const {loading, user} = useAuth0();
  const totalComments = 2;

  if (loading || !user ){
    return <h1>Loading...</h1>
  }


  return (
    <div className="">
      <div className="border-custom">
        <p>Comments ({totalComments})</p>
      </div>
      <div className="comments">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className="postComment border-custom">
      <PostComment userName={user.name} userPicture={user.picture}/>
      </div>
    </div>
  );
};

export default CommentContainer;
