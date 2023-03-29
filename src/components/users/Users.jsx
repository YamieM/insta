import User from "../user/User";
import "./style.scss";

const Users = (props) => {
  const { posts = [] } = props;
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

export default Users;
