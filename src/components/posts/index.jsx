import {Post} from "../post";
import "./style.css";

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts-container">
      {posts.length ? (
        posts.map((post) => <Post key={post.id} {...post} />)
      ) : (
        <span>NOT FOUND</span>
      )}
    </div>
  );
};

