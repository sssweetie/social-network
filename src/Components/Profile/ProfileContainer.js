import React, { Component } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profileReducer";
import withRouter from "../../withRouter";
export class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 1;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        return this.props.setUserProfile(response.data);
      });
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
