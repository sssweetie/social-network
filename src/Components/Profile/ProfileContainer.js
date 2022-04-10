import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUserProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
} from "../../Redux/profileReducer";
import isLoginWrapper from "../../HOC/withLoginWrapper";
import { compose } from "redux";

export class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    this.props.setUserProfileThunkCreator(this.props.params.userId);
    this.props.getStatusThunkCreator(this.props.params.userId);
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatusThunkCreator}
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
});

export default compose(
  connect(mapStateToProps, {
    setUserProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
  }),
  isLoginWrapper
)(ProfileContainer);
