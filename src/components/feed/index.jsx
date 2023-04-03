import React from "react";
import data from "../../posts.json";
import { Posts } from "../posts";
import { Users } from "../users";
import "./style.scss";

export class Feed extends React.Component {
  state = {
    posts: data,
    isLoading: false,
  };

  render() {
    const { posts } = this.state.posts;

    return (
      <main className="feed-container">
        <Posts posts={posts} />
        <Users posts={posts} />
      </main>
    );
  }
}
