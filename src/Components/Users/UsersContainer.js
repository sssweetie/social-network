import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onToggleFollow,
  setFollowing,
  getUsersThunkCreator,
  onPageChangedThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
class UsersAPI extends Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChanged = (page) => {
    this.props.onPageChangedThunkCreator(page, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersSize={this.props.totalUsersSize}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          isFollowing={this.props.isFollowing}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          followThunkCreator={this.props.followThunkCreator}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
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
    isFollowing: state.usersPage.isFollowing,
  };
};

export default connect(mapStateToProps, {
  onToggleFollow,
  setFollowing,
  getUsersThunkCreator,
  onPageChangedThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
})(UsersAPI);
