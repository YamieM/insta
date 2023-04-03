import React, { useEffect, useState } from "react";
import data from "../../posts.json";
import { Posts } from "../posts";
import { Users } from "../users";
import "./style.scss";

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  //или можно сразу useState(data.posts)

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    } 
  }, []);

  return (
    <main className="feed-container">
      <Posts posts={posts} />
      <Users posts={posts} />
    </main>
  );
};
