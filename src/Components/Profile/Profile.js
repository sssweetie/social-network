import React from "react";
import Posts from "./__Posts/Profile__PostsContainer";
import PersonInfo from "./__PersonInfo/Profile__PersonInfo";
function Profile(props) {
  return (
    <div>
      <PersonInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      ></PersonInfo>
      <Posts></Posts>
    </div>
  );
}

export default Profile;
