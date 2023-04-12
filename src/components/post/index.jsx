import { User } from "../user";
import "./style.scss";

export const Post = ({ name, photo, alt, src, descr }) => {
  return (
    <div className="post-container">
      <User photo={photo} alt={alt} name={name} />
      <div className="post-sub-container">
        <div className="post-photo-container">
          <img className="post-photo" src={src} alt={alt} />
        </div>
        <span className="post-text">{descr}</span>
      </div>
    </div>
  );
};
