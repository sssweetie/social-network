import React from "react";
import Posts from "./__Posts/Profile__PostsContainer";
import PersonInfo from "./__PersonInfo/Profile__PersonInfo";
function Profile(props) {
  return (
    <div>
      <PersonInfo profile={props.profile}></PersonInfo>
      <Posts></Posts>
    </div>
  );
}

export default Profile;
