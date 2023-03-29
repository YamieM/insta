import React from "react";
import data from "../../posts.json";
import Posts from "../posts/Posts";
import Users from "../users/Users";
import "./style.scss";

export default class Feed extends React.Component {
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
