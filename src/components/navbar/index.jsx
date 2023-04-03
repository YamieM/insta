import { NavLink } from "react-router-dom";
import logo from "../../img/logo-header.svg";

import "./style.css";
export const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar__logo-container">
          <NavLink to="/" className="logo">
            <img src={logo} alt="Instagram"></img>
          </NavLink>
        </div>
        <ul className="navbar__list">
          <NavLink to="/">
            <li className="navbar-list__item">Лента</li>
          </NavLink>
          <NavLink to='/profile/'>
            <li className="navbar-list__item">Профиль</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

