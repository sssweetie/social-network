import React from "react";
import styles from "./Users.module.css";
function Users(props) {
  debugger;
  if (props.users.length === 0) {
    debugger;
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
  debugger;

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id} className={styles.users}>
          <div>
            <div>
              <img className={styles.avatar} src={user.avatar}></img>
            </div>
            <div>
              {user.followed ? (
                <button onClick={() => props.onToggleFollow(user.id)}>
                  FOLLOWED
                </button>
              ) : (
                <button onClick={() => props.onToggleFollow(user.id)}>
                  UNFOLLOWED
                </button>
              )}
            </div>
          </div>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
