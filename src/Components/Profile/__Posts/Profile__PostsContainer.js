import React from 'react';

import { connect } from 'react-redux';

import { addPostActionCreator } from '../../../Redux/profileReducer';

import Profile__Posts from './Profile__Posts';

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    postNewText: state.profilePage.postNewText,
  };
};
const mapDispatchToProps = (dispatch) => {
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
