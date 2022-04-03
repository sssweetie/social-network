import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import avatar from "./avatar.jpeg";
function Users(props) {
  console.log(axios.get("https://social-network.samuraijs.com/api/1.0/users"));
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => props.setUsers(response.data.items));
    }

    // props.setUsers([
    //   {
    //     id: "1",
    //     name: "Aleksandr Tokarev",
    //     status: "Welcome to the club",
    //     location: {
    //       country: "Russia",
    //       city: "Volgograd",
    //     },
    //     followed: false,
    //     avatar:
    //       "https://sun9-12.userapi.com/impf/zp35cVkz1dcQ64GzFQC8Lrp8w7srADXe9Cfg_Q/mzNwEXYGuWs.jpg?size=1486x1531&quality=95&sign=40d8139633919d1740cebd8c57e499c2&type=album",
    //   },
    //   {
    //     id: "2",
    //     name: "Dmitriy Tokarev",
    //     status: "Welcome",
    //     location: {
    //       country: "Belgium",
    //       city: "Geel",
    //     },
    //     followed: true,
    //     avatar:
    //       "https://sun9-12.userapi.com/impf/zp35cVkz1dcQ64GzFQC8Lrp8w7srADXe9Cfg_Q/mzNwEXYGuWs.jpg?size=1486x1531&quality=95&sign=40d8139633919d1740cebd8c57e499c2&type=album",
    //   },
    //   {
    //     id: "3",
    //     name: "Dan Tokarev",
    //     status: "Welcome to",
    //     location: {
    //       country: "Russia",
    //       city: "Moscow",
    //     },
    //     followed: true,
    //     avatar:
    //       "https://sun9-12.userapi.com/impf/zp35cVkz1dcQ64GzFQC8Lrp8w7srADXe9Cfg_Q/mzNwEXYGuWs.jpg?size=1486x1531&quality=95&sign=40d8139633919d1740cebd8c57e499c2&type=album",
    //   },
    //   {
    //     id: "4",
    //     name: "Max Tokarev",
    //     status: "Welcome to the",
    //     location: {
    //       country: "Russia",
    //       city: "Omsk",
    //     },
    //     followed: false,
    //     avatar:
    //       "https://sun9-12.userapi.com/impf/zp35cVkz1dcQ64GzFQC8Lrp8w7srADXe9Cfg_Q/mzNwEXYGuWs.jpg?size=1486x1531&quality=95&sign=40d8139633919d1740cebd8c57e499c2&type=album",
    //   },
    // ]);
  };

  return (
    <div className={styles.grid}>
      {props.users.map((user) => (
        <div key={user.id} className={styles.users}>
          <div className={styles.avatarName}>
            <img
              className={styles.avatar}
              src={user.photos.small != null ? user.photos.small : avatar}
            ></img>
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
      ))}
      <div className={styles.getUsers}>
        <button onClick={getUsers}>Get users</button>
      </div>
    </div>
  );
}

export default Users;
