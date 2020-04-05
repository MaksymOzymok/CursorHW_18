import React from "react";
import "./post.css"
import User from "./user";
import PostDate from "./post-date";
import PostContent from "./post-content";
import PostOptions from "./post-options";

const Post = ({data})=>{
    const{userData,contentData,postData} = data;
    return(
        <div className="post">
            <div className="top-panel">
                <User userData={userData}/>
                <PostDate date={contentData.date}/>
            </div>
            <PostContent contentData={contentData}/>
            <PostOptions postData={postData}/>
        </div>
    )
};
export default Post;