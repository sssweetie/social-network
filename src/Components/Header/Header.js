import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className={styles.header}>
      <NavLink
        to="/profile"
        className={(navData) =>
          navData.isActive ? styles.activeLink : styles.disableLink
        }
      >
        <img src="https://media.discordapp.net/attachments/959904939096834048/960028115395035136/132131231.png"></img>
      </NavLink>
    </header>
  );
}

export default Header;
