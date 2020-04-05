import React from "react";
import "./post-options.css";

const PostOptions = ({postData})=>{
  const {comments,sharing,likes} = postData;
  return (
      <div className="post-options">
        <div className="post-option-comments">
            <i className="far fa-comment-alt icon"></i>
            <span>{comments}</span>
        </div>
          <div className="post-option-sharing">
              <i className="fas fa-retweet icon"></i>
              <span>{sharing}</span>
          </div>
          <div className="post-option-like">
              <i className="far fa-heart icon"></i>
              <span>{likes}</span>
          </div>
          <div className="post-option-upload">
              <i className="fas fa-upload icon"></i>
          </div>
      </div>
  )
};
export default PostOptions;