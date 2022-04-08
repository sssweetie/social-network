import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfileThunkCreator } from "../../Redux/profileReducer";
import withRouter from "../../withRouter";

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

let mapStateToProps = (state) => ({ profile: state.profilePage.profile });
let withRouterComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfileThunkCreator })(
  withRouterComponent
);
