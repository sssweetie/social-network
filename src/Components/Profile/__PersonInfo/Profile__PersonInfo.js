import React from "react";
import Preloader from "../../Preloader/Preloader";
import styles from "./Profile__PersonInfo.module.css";
import ProfileStatusHooks from "./_ProfileStatus/ProfileStatusHooks";
import avatar from "../../Users/ava.png";
function Profile__PersonInfo(props) {
  const onPhotoSelected = (event) => {
    debugger;
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  };
  if (!props.profile) {
    return <Preloader></Preloader>;
  } else {
    return (
      <div>
        <img
          src={props.profile.photos.large || avatar}
          className={styles.avatar}
        ></img>
        {props.isOwner && <input onChange={onPhotoSelected} type="file" />}
        <ProfileStatusHooks
          updateStatus={props.updateStatus}
          status={props.status}
        />
      </div>
    );
  }
}

export default Profile__PersonInfo;
