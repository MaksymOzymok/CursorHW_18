import React from "react";
import {Fragment} from "react";
import Post from "./post/post";


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const userData = {
    name: "Anakin skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    verified: true
};

const contentData = {
    text : "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image : RAY_IMAGE,
    date : "27 Feb"
};
const postData = {
    comments: 482,
    sharing : 146,
    likes : 887
};

const Posts = ()=>{
  return(
  <Fragment>
    <Post data={{userData,contentData,postData}}/>
      <Post data={{userData,contentData,postData}}/>
      <Post data={{userData,contentData,postData}}/>
  </Fragment>
  )
};
export default Posts;