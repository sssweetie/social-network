import React, { useState } from 'react';

import Preloader from '../../Preloader/Preloader';

import avatar from '../../Users/ava.png';

import styles from './Profile__PersonInfo.module.css';
import ProfileStatusHooks from './_ProfileStatus/ProfileStatusHooks';
import ContactInfo from './ContactInfo/ContactInfo';
import EditContactInfo from './ContactInfo/EditContactInfo';
function Profile__PersonInfo(props) {
  const [editMode, setEditMode] = useState(false);

  const onPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  };

  const onSubmitData = (formData) => {
    props.saveProfile(formData).then(() => setEditMode(false));
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
        {editMode ? (
          <EditContactInfo
            profile={props.profile}
            initialValues={props.profile}
            onSubmit={onSubmitData}
          ></EditContactInfo>
        ) : (
          <ContactInfo
            isOwner={props.isOwner}
            profile={props.profile}
            activateEditMode={() => setEditMode(true)}
          ></ContactInfo>
        )}
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
