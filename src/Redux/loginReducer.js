import React from "react";
const SET_LOGIN_USER_DATA = "SET-LOGIN-USER-DATA";
let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
};
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_USER_DATA:
      return { ...state, ...action.data, isLogin: true };
    default:
      return state;
  }
}
export const setLoginUserData = (userId, email, login) => ({
  type: SET_LOGIN_USER_DATA,
  data: { userId, email, login },
});
export default loginReducer;
