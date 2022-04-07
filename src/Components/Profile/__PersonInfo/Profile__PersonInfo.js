import React from "react";
import Preloader from "../../Preloader/Preloader";
import styles from "./Profile__PersonInfo.module.css";
function Profile__PersonInfo(props) {
  if (!props.profile) {
    return <Preloader></Preloader>;
  } else {
    return (
      <div>
        <img
          className={styles.backgroundImage}
          src="https://static.vecteezy.com/system/resources/previews/002/207/827/large_2x/abstract-neon-background-free-vector.jpg"
        ></img>
        <div>
          <img src={props.profile.photos.large}></img>
        </div>
      </div>
    );
  }
}

export default Profile__PersonInfo;
