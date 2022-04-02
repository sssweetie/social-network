import React from "react";
import styles from "./Users.module.css";
function Users(props) {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: "1",
        name: "Aleksandr Tokarev",
        status: "Welcome to the club",
        location: {
          country: "Russia",
          city: "Volgograd",
        },
        followed: false,
        avatar:
          "http://pm1.narvii.com/7501/8f4cc5dbb7c44817825e7980169728b9e80df31fr1-600-900v2_uhq.jpg",
      },
      {
        id: "2",
        name: "Dmitriy Tokarev",
        status: "Welcome",
        location: {
          country: "Belgium",
          city: "Geel",
        },
        followed: true,
        avatar:
          "http://pm1.narvii.com/7501/8f4cc5dbb7c44817825e7980169728b9e80df31fr1-600-900v2_uhq.jpg",
      },
      {
        id: "3",
        name: "Dan Tokarev",
        status: "Welcome to",
        location: {
          country: "Russia",
          city: "Moscow",
        },
        followed: true,
        avatar:
          "http://pm1.narvii.com/7501/8f4cc5dbb7c44817825e7980169728b9e80df31fr1-600-900v2_uhq.jpg",
      },
      {
        id: "4",
        name: "Max Tokarev",
        status: "Welcome to the",
        location: {
          country: "Russia",
          city: "Omsk",
        },
        followed: false,
        avatar:
          "http://pm1.narvii.com/7501/8f4cc5dbb7c44817825e7980169728b9e80df31fr1-600-900v2_uhq.jpg",
      },
    ]);
  }
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
                <button onClick={() => props.onToggleFollow(u.id)}>
                  FOLLOWED
                </button>
              ) : (
                <button onClick={() => props.onToggleFollow(u.id)}>
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
