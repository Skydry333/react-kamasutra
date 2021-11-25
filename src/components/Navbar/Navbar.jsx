import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <Link to="/profile">
            Profile
          </Link>
        </li>
        <li className={s.item}>
          <Link to="/dialogs">
            Messages
          </Link>
        </li>
        <li className={s.item}>
        <Link to="/news">
            News
          </Link>
        </li>
        <li className={s.item}>
          <Link to="/music">
            Music
          </Link>
        </li>
        <li className={s.item}>
          <Link to="settings">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
