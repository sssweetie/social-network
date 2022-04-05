import React from "react";
const IS_FOLLOWED = "IS-FOLLOWED";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS = "SET-TOTAL-USERS";
const FETCHING = "FETCHING";
let initialState = {
  users: [],
  pageSize: 4,
  totalUsersSize: 0,
  currentPage: 1,
  isFetching: false,
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
      return { ...state, isFetching: action.status };
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
export const setTotalUsers = (totalCount) => ({
  type: SET_TOTAL_USERS,
  totalCount,
});
export const setStatusFetching = (status) => ({ type: FETCHING, status });
export default usersReducer;
