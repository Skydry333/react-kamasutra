import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
          <textarea></textarea>
          <button>add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hello, howe are you?'/>
        <Post message='Hi it is fine'/>
      </div>
    </div>
  );
};

export default MyPosts;
