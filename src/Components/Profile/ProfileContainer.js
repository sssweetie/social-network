import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfileThunkCreator } from "../../Redux/profileReducer";
import withLoginWrapper from "../../HOC/withLoginWrapper";
import { compose } from "redux";

export class ProfileContainer extends Component {
  componentDidMount() {
    this.props.setUserProfileThunkCreator(this.props.params.userId);
  }
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { setUserProfileThunkCreator }),
  withLoginWrapper
)(ProfileContainer);
