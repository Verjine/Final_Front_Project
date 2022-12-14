import React from "react";
import posts from "../api/posts";

function LatestPosts() {
  return (
    <section className="posts" id="posts">
    <div className="post_header">
      <h2 className="text1">Latest posts</h2>
      </div>
      <div className="post_container">
      {posts.map((element, id) => (
        <div className="post" key={id}>
          <img src={element.imgUrl}  alt ="img"/>
          <h3>{element.title}</h3>
          <span>{element.describe}</span>
        </div>
      ))}
    </div>
    </section>
  );
}

export default LatestPosts;
