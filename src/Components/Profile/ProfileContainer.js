import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUserProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
  savePhotoThunkCreator,
  saveProfileThunkCreator,
} from "../../Redux/profileReducer";
import { checkOwnerStatus } from "../../Redux/loginReducer";
import isLoginWrapper from "../../HOC/withLoginWrapper";
import { compose } from "redux";

export class ProfileContainer extends Component {
  refreshProfile() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    if (this.props.userId != this.props.params.userId) {
      this.props.checkOwnerStatus(false);
    } else {
      this.props.checkOwnerStatus(true);
    }
    this.props.setUserProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params.userId != prevProps.params.userId)
      this.refreshProfile();
  }
  render() {
    return (
      <div>
        <Profile
          savePhoto={this.props.savePhotoThunkCreator}
          isOwner={this.props.isOwner}
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatusThunkCreator}
          saveProfile={this.props.saveProfileThunkCreator}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.loginForm.userId,
  isLogin: state.loginForm.isLogin,
  isOwner: state.loginForm.isOwner,
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
