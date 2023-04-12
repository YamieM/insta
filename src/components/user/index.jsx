import { NavLink } from "react-router-dom";
import "./style.scss";

export const User = ({ photo, name, alt }) => {
  return (
    <div className="user-container">
      <div className="user-photo-container">
        <img className="user-photo" src={photo} alt={alt} />
      </div>
      <NavLink to={`/profile/${name}`} className="user-link">
        <span className="user-name">{name}</span>
      </NavLink>
    </div>
  );
};

