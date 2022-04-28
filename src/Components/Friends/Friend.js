import React from "react";
import styles from "./Friends.module.css";
import { NavLink } from "react-router-dom";
import avatar from "./manifest.jpeg";
function Friend({
  id,
  photos,
  followed,
  unfollowThunkCreator,
  followThunkCreator,
  isFollowing,
  name,
  status,
}) {
  return (
    <div key={id} className={styles.friends}>
      <div className={styles.avatarName}>
        <NavLink to={"/profile/" + id}>
          <img
            className={styles.avatar}
            src={photos.small != null ? photos.small : avatar}
          ></img>
        </NavLink>
      </div>
      <div className={styles.status}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{status}</div>
        <div className={styles.location}>
          {"friend.location.country"}, {"friend.location.city"}
        </div>
      </div>
      <div className={styles.gridButton}>
        {followed ? (
          <button
            disabled={isFollowing.some((idFollowing) => idFollowing === id)}
            onClick={() => {
              unfollowThunkCreator(id);
            }}
          >
            UNFOLLOW
          </button>
        ) : (
          <button
            disabled={isFollowing.some((idFollowing) => idFollowing === id)}
            onClick={() => {
              followThunkCreator(id);
            }}
          >
            FOLLOW
          </button>
        )}
      </div>
    </div>
  );
}

export default Friend;
