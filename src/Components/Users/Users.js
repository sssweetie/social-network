import React from "react";
import styles from "./Users.module.css";
import avatar from "./avatar.jpeg";
import axios from "axios";
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
            {!user.followed ? (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "0086f8be-cdf1-4d9f-b77f-025c4385c376",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.onToggleFollow(user.id);
                      }
                    });
                }}
              >
                FOLLOWED
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "0086f8be-cdf1-4d9f-b77f-025c4385c376",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.onToggleFollow(user.id);
                      }
                    });
                }}
              >
                UNFOLLOWED
              </button>
            )}
          </div>
        </div>
      ))}
      {/* <div className={styles.getUsers}>
    <button onClick={this.getUsers}>Get users</button>
  </div> */}
    </div>
  );
}

export default Users;
