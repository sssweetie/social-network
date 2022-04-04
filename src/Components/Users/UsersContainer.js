import React from "react";
import { connect } from "react-redux";
import {
  onToggleFollowActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  setTotalUsersActionCreator,
} from "../../Redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersSize: state.usersPage.totalUsersSize,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onToggleFollow: (userId) => {
      dispatch(onToggleFollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageActionCreator(currentPage));
    },
    setTotalUsers: (totalCount) => {
      dispatch(setTotalUsersActionCreator(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
