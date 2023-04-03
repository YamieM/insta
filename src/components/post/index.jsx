import { User } from "../user";
import "./style.scss";

export const Post = ({
  name: post_name,
  photo: post_photo,
  alt: post_alt,
  src: post_src,
  descr: post_descr,
}) => {
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
