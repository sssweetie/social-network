import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfileThunkCreator } from "../../Redux/profileReducer";
import withRouter from "../../withRouter";
import { Navigate } from "react-router-dom";
export class ProfileContainer extends Component {
  componentDidMount() {
    this.props.setUserProfileThunkCreator(this.props.params.userId);
  }
  render() {
    if (!this.props.isLogin) {
      return <Navigate return to="/login" />;
    }

    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isLogin: state.loginForm.isLogin,
});
let withRouterComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfileThunkCreator })(
  withRouterComponent
);
