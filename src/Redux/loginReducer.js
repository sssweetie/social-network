import React from "react";
import { stopSubmit } from "redux-form";
import { apiAxios, loginAPI } from "../API/api";
const SET_LOGIN_USER_DATA = "SET-LOGIN-USER-DATA";
const LOGIN_USER = "LOGIN-USER";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
};
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_USER_DATA:
      return { ...state, ...action.data };
    case LOGIN_USER:
      return { ...state, userId: action.userId };
    default:
      return state;
  }
}
export const setLoginUserData = (userId, email, login, isLogin) => ({
  type: SET_LOGIN_USER_DATA,
  data: { userId, email, login, isLogin },
});

export const loginUser = (userId) => ({ type: LOGIN_USER, userId });

export const loginUserThunkCreator =
  (email, password, rememberMe) => (dispatch) => {
    loginAPI.loginUser(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(loginThunkCreator());
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Error";
        dispatch(
          stopSubmit("login", {
            _error: message,
          })
        );
      }
    });
  };

export const logoutUserThunkCreator = () => (dispatch) => {
  loginAPI.logoutUser().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setLoginUserData(null, null, null, false));
    }
  });
};

export const loginThunkCreator = () => (dispatch) => {
  return apiAxios.loginUser().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setLoginUserData(id, email, login, true));
    }
  });
};

export default loginReducer;
