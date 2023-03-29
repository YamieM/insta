import { NavLink } from "react-router-dom";
import "./style.scss";

const User = (props) => {
  const { photo, name, alt } = props;
  return (
    <div className="user-container">
      <div className="user-photo-container">
        <img className="user-photo" src={photo} alt={alt} />
      </div>
      <NavLink to={`/profile/${name}`} className='user-link'>
        <span className="user-name">{name}</span>
      </NavLink>
    </div>
  );
};

export default User;
