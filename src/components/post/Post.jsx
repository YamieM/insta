import User from "../user/User";
import "./style.scss";

const Post = (props) => {
  const {
    name: post_name,
    photo: post_photo,
    alt: post_alt,
    src: post_src,
    descr: post_descr,
  } = props;

  return (
    <div className="post-container">
      <User photo={post_photo} alt={post_alt} name={post_name} />
      <div className="post-sub-container">
        <div className="post-photo-container"> 
          <img className="post-photo" src={post_src} alt={post_alt} />
        </div>
        <span className="post-text">{post_descr}</span>
      </div>
    </div>
  );
};

export default Post;
