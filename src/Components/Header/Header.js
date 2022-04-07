import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <header className={styles.header}>
      <NavLink
        to="/profile/2"
        className={(navData) =>
          navData.isActive ? styles.activeLink : styles.disableLink
        }
      >
        <img src="https://media.discordapp.net/attachments/959904939096834048/960028115395035136/132131231.png"></img>
      </NavLink>
      {console.log(props)}
      {props.isLogin ? props.login : <NavLink to="/login">Login</NavLink>}
    </header>
  );
}

export default Header;
