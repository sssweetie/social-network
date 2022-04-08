import React from "react";
import styles from "./Users.module.css";
import avatar from "./avatar.jpeg";
import { NavLink } from "react-router-dom";
function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersSize / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.grid}>
      <div className={styles.flexPages}>
        {pages.map((page) => {
          return props.currentPage + 3 > page ? (
            <a
              key={page}
              className={
                props.currentPage === page
                  ? `${styles.chosenPage} ${styles.page}`
                  : `${styles.unChosenPage} + ${styles.page}`
              }
              onClick={() => props.onPageChanged(page)}
            >
              {page}
            </a>
          ) : (
            <a></a>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id} className={styles.users}>
          <div className={styles.avatarName}>
            <NavLink to={"/profile/" + user.id}>
              <img
                className={styles.avatar}
                src={user.photos.small != null ? user.photos.small : avatar}
              ></img>
            </NavLink>
          </div>
          <div className={styles.status}>
            <div className={styles.name}>{user.name}</div>
            <div className={styles.description}>{user.status}</div>
            <div className={styles.location}>
              {"user.location.country"}, {"user.location.city"}
            </div>
          </div>
          <div className={styles.gridButton}>
            {user.followed ? (
              <button
                disabled={props.isFollowing.some((id) => id === user.id)}
                onClick={() => {
                  props.unfollowThunkCreator(user.id);
                }}
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                disabled={props.isFollowing.some((id) => id === user.id)}
                onClick={() => {
                  props.followThunkCreator(user.id);
                }}
              >
                FOLLOW
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
