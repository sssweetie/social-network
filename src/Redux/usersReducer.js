import React from "react";
import { apiAxios } from "../API/api";
const IS_FOLLOWED = "IS-FOLLOWED";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS = "SET-TOTAL-USERS";
const FETCHING = "FETCHING";
const SET_FOLLOWING = "SET-FOLLOWING";
let initialState = {
  users: [],
  pageSize: 4,
  totalUsersSize: 0,
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
};
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FOLLOWED: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS: {
      return { ...state, totalUsersSize: action.totalCount };
    }
    case FETCHING: {
      return { ...state, isFetching: action.statusFetching };
    }
    case SET_FOLLOWING: {
      return {
        ...state,
        isFollowing: action.statusFollowing
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
}

export const onToggleFollow = (userID) => ({
  type: IS_FOLLOWED,
  userID,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setFollowing = (statusFollowing, userId) => ({
  type: SET_FOLLOWING,
  statusFollowing,
  userId,
});

export const setTotalUsers = (totalCount) => ({
  type: SET_TOTAL_USERS,
  totalCount,
});
export const setStatusFetching = (statusFetching) => ({
  type: FETCHING,
  statusFetching,
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setStatusFetching(true));
    apiAxios.getUsers(currentPage, pageSize).then((data) => {
      return (
        dispatch(setStatusFetching(false)),
        dispatch(setUsers(data.items)),
        dispatch(setTotalUsers(data.totalCount))
      );
    });
  };
};
export const onPageChangedThunkCreator = (page, pageSize) => {
  return (dispatch) => {
    dispatch(setStatusFetching(true));
    dispatch(setCurrentPage(page));
    apiAxios.getUsers(page, pageSize).then((data) => {
      dispatch(setStatusFetching(false));
      dispatch(setUsers(data.items));
    });
  };
};
export const followThunkCreator = (id) => {
  return (dispatch) => {
    dispatch(setFollowing(true, id));
    apiAxios.followUser(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(onToggleFollow(id));
      }
      dispatch(setFollowing(false, id));
    });
  };
};
export const unfollowThunkCreator = (id) => {
  return (dispatch) => {
    dispatch(setFollowing(true, id));
    apiAxios.unfollowUser(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(onToggleFollow(id));
      }
      dispatch(setFollowing(false, id));
    });
  };
};

export default usersReducer;
