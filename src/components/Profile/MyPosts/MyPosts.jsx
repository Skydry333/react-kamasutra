import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div className={s.addPost}>
          <button>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hello, howe are you?" />
        <Post message="Hi it is fine" />
      </div>
    </div>
  );
};

export default MyPosts;
