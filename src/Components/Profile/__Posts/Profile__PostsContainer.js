import React from "react";
import Profile__Posts from "./Profile__Posts";
import { addPostActionCreator } from "../../../Redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    postNewText: state.profilePage.postNewText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onClickAddNewPost: (message) => {
      dispatch(addPostActionCreator(message));
    },
  };
};
const Profile__PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile__Posts);
export default Profile__PostsContainer;
