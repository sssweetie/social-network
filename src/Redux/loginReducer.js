import React from "react";
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
      return { ...state, ...action.data, isLogin: true };
    case LOGIN_USER:
      return { ...state, userId: action.userId };
    default:
      return state;
  }
}
export const setLoginUserData = (userId, email, login) => ({
  type: SET_LOGIN_USER_DATA,
  data: { userId, email, login },
});

export const loginUser = (userId) => ({ type: LOGIN_USER, userId });

export const loginUserThunkCreator =
  (email, password, rememberMe, captcha) => (dispatch) => {
    loginAPI
      .loginUser(email, password, rememberMe, captcha)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(loginUser(response.data.userId));
        }
      });
  };

export const loginThunkCreator = () => (dispatch) => {
  apiAxios.loginUser().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setLoginUserData(id, email, login));
    }
  });
};

export default loginReducer;
