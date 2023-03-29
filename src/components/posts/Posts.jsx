import Post from "../post/Post";
import "./style.css";

const Posts = (props) => {
  const { posts = [] } = props;

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

export default Posts;
