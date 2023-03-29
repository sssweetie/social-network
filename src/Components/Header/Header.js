import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={styles.header}>
      <NavLink
        to={'/profile/' + props.userId}
        className={(navData) =>
          navData.isActive ? styles.activeLink : styles.disableLink
        }
      >
        <img
          src="https://media.discordapp.net/attachments/959904939096834048/960028115395035136/132131231.png"
          alt="Avatar of profile"
        ></img>
      </NavLink>
      <div className={styles.wrapperLogout}>
        {props.isLogin ? props.login : <NavLink to="/login">Login</NavLink>}
        <button
          className={styles.logout}
          onClick={props.logoutUserThunkCreator}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
