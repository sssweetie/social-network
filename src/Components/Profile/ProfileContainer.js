import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profileReducer";
import withRouter from "../../withRouter";
import { apiAxios } from "../../API/api";
export class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 1;
    }
    apiAxios
      .getUserProfile(userId)
      .then((data) => this.props.setUserProfile(data));
  }
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({ profile: state.profilePage.profile });
let withRouterComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  withRouterComponent
);
