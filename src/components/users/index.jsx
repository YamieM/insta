import { User } from "../user";
import "./style.scss";

export const Users = ({ posts = [] }) => {
  return (
    <div className="users-container">
      {posts.map((post) => (
        <User
          key={post.id}
          photo={post.photo}
          name={post.name}
          alt={post.alt}
        />
      ))}
    </div>
  );
};

