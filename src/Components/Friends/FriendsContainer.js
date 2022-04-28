import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onToggleFollow,
  setFollowing,
  getFriendsThunkCreator,
  onPageChangedThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from "../../Redux/usersReducer";
import Friends from "./Friends";
import Preloader from "../Preloader/Preloader";
import {
  getCurrentPage,
  getFetchingStatus,
  getFollowingStatus,
  getPageSize,
  getTotalUsersSize,
  getUsers,
} from "../../Redux/selectors/userSelector";
class FriendsAPI extends Component {
  componentDidMount() {
    this.props.getFriendsThunkCreator(
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
        <Friends
          totalUsersSize={this.props.totalUsersSize}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          isFollowing={this.props.isFollowing}
          friends={this.props.friends}
          onPageChanged={this.onPageChanged}
          followThunkCreator={this.props.followThunkCreator}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
        ></Friends>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    friends: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersSize: getTotalUsersSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getFetchingStatus(state),
    isFollowing: getFollowingStatus(state),
  };
};

export default connect(mapStateToProps, {
  getFriendsThunkCreator,
  onToggleFollow,
  setFollowing,
  onPageChangedThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
})(FriendsAPI);
