import React from "react";
import Preloader from "../../Preloader/Preloader";
import styles from "./Profile__PersonInfo.module.css";
import ProfileStatus from "./_ProfileStatus/Profile_ProfileStatus";
function Profile__PersonInfo(props) {
  if (!props.profile) {
    return <Preloader></Preloader>;
  } else {
    return (
      <div>
        <img src={props.profile.photos.large}></img>
        <ProfileStatus></ProfileStatus>
      </div>
    );
  }
}

export default Profile__PersonInfo;
