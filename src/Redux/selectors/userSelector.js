import React from "react";

export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersSize = (state) => {
  return state.usersPage.totalUsersSize;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getFetchingStatus = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingStatus = (state) => {
  return state.usersPage.isFollowing;
};
