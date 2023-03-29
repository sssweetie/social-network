import React, { Component } from 'react';

import { connect } from 'react-redux';

import { compose } from 'redux';

import {
  setUserProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
  savePhotoThunkCreator,
  saveProfileThunkCreator,
} from '../../Redux/profileReducer';
import { checkOwnerStatus } from '../../Redux/loginReducer';
import isLoginWrapper from '../../HOC/withLoginWrapper';
import { getProfile, getStatus } from '../../Redux/selectors/profileSelector';
import {
  getUserId,
  getIsLogin,
  getIsOwner,
} from '../../Redux/selectors/loginSelector';

import Profile from './Profile';

export class ProfileContainer extends Component {
  refreshProfile() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    if (this.props.userId !== this.props.params.userId)
      this.props.checkOwnerStatus(true); //todo
    else this.props.checkOwnerStatus(true);

    this.props.setUserProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params.userId !== prevProps.params.userId)
      this.refreshProfile();
  }
  render() {
    return (
      <Profile
        savePhoto={this.props.savePhotoThunkCreator}
        isOwner={this.props.isOwner}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunkCreator}
        saveProfile={this.props.saveProfileThunkCreator}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: getProfile(state),
  status: getStatus(state),
  userId: getUserId(state),
  isLogin: getIsLogin(state),
  isOwner: getIsOwner(state),
});

export default compose(
  connect(mapStateToProps, {
    setUserProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    checkOwnerStatus,
    savePhotoThunkCreator,
    saveProfileThunkCreator,
  }),
  isLoginWrapper
)(ProfileContainer);
