import React from "react";
const IS_FOLLOWED = "IS-FOLLOWED";
const SET_USERS = "SET-USERS";
let initialState = { users: [] };
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FOLLOWED: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
}

export const onToggleFollowActionCreator = (userID) => ({
  type: IS_FOLLOWED,
  userID,
});
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export default usersReducer;
