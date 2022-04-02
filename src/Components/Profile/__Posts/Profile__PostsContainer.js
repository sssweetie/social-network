import React from "react";
import Profile__Posts from "./Profile__Posts";
import {
  addPostActionCreator,
  updateTextActionCreator,
} from "../../../Redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    postNewText: state.profilePage.postNewText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onChangeMessageText: (text) => dispatch(updateTextActionCreator(text)),
    onClickAddNewPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};
const Profile__PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile__Posts);
export default Profile__PostsContainer;
