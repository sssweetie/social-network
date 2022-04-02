import React from "react";
import styles from "./Users.module.css";
function Users(props) {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img className={styles.avatar} src={u.avatar}></img>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    debugger;
                    props.onToggleFollow(u.id);
                  }}
                >
                  FOLLOWED
                </button>
              ) : (
                <button
                  onClick={() => {
                    debugger;
                    props.onToggleFollow(u.id);
                  }}
                >
                  UNFOLLOWED
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
