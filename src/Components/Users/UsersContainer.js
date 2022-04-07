import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onToggleFollow,
  setCurrentPage,
  setUsers,
  setTotalUsers,
  setStatusFetching,
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { apiAxios } from "../../API/api";
class UsersAPI extends Component {
  componentDidMount() {
    apiAxios
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        return (
          this.props.setStatusFetching(false),
          this.props.setUsers(data.items),
          this.props.setTotalUsers(data.totalCount)
        );
      });
  }
  onPageChanged = (page) => {
    this.props.setStatusFetching(true);
    this.props.setCurrentPage(page);
    apiAxios.getUsers(page, this.props.pageSize).then((data) => {
      this.props.setStatusFetching(false);
      this.props.setUsers(data.items);
    });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersSize={this.props.totalUsersSize}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          onToggleFollow={this.props.onToggleFollow}
        ></Users>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersSize: state.usersPage.totalUsersSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     onToggleFollow: (userId) => {
//       dispatch(onToggleFollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageActionCreator(currentPage));
//     },
//     setTotalUsers: (totalCount) => {
//       dispatch(setTotalUsersActionCreator(totalCount));
//     },
//     setStatusFetching: (status) => {
//       dispatch(isFetchingActionCreator(status));
//     },
//   };
// };

export default connect(mapStateToProps, {
  onToggleFollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  setStatusFetching,
})(UsersAPI);
