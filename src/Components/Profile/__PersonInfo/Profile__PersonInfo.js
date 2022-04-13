import React from "react";
import Preloader from "../../Preloader/Preloader";
import styles from "./Profile__PersonInfo.module.css";
import ProfileStatusHooks from "./_ProfileStatus/ProfileStatusHooks";
function Profile__PersonInfo(props) {
  if (!props.profile) {
    return <Preloader></Preloader>;
  } else {
    return (
      <div>
        <img src={props.profile.photos.large}></img>
        <ProfileStatusHooks
          updateStatus={props.updateStatus}
          status={props.status}
        />
      </div>
    );
  }
}

export default Profile__PersonInfo;
