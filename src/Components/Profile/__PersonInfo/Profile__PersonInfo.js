import React from "react";
import styles from "./Profile__PersonInfo.module.css";
function Profile__PersonInfo() {
  return (
    <div>
      <img
        className={styles.backgroundImage}
        src="https://static.vecteezy.com/system/resources/previews/002/207/827/large_2x/abstract-neon-background-free-vector.jpg"
      ></img>
      <div>avatar</div>
    </div>
  );
}

export default Profile__PersonInfo;
