import React from "react";
import { connect } from "react-redux";
import {
  onToggleFollowActionCreator,
  setUsersActionCreator,
} from "../../Redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return { users: state.usersPage.users };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onToggleFollow: (userId) => {
      dispatch(onToggleFollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
