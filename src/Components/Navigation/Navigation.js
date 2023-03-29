import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';
function Navigation(props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to={'/profile/' + props.userId}
          className={(navData) =>
            navData.isActive ? styles.activeLink : styles.disableLink
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink
          to={'/friends'}
          className={(navData) =>
            navData.isActive ? styles.activeLink : styles.disableLink
          }
        >
          Friends
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/messages"
          className={(navData) =>
            navData.isActive ? styles.activeLink : styles.disableLink
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <a>News</a>
      </div>
      <div className={styles.item}>
        <a>Music</a>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/users"
          className={(navData) =>
            navData.isActive ? styles.activeLink : styles.disableLink
          }
        >
          Users
        </NavLink>
      </div>
      <div className={styles.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
}

export default Navigation;
