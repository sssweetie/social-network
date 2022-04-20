import React from "react";
import { stopSubmit } from "redux-form";
import { apiAxios, loginAPI } from "../API/api";
const SET_LOGIN_USER_DATA = "loginReducer/SET-LOGIN-USER-DATA";
const LOGIN_USER = "loginReducer/LOGIN-USER";
const CHECK_OWNER = "loginReducer/CHECK-OWNER";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
  isOwner: false,
};
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_OWNER:
      return { ...state, isOwner: action.status };
    case SET_LOGIN_USER_DATA:
      return { ...state, ...action.data };
    case LOGIN_USER:
      return { ...state, userId: action.userId };
    default:
      return state;
  }
}
export const checkOwnerStatus = (status) => ({
  type: CHECK_OWNER,
  status: status,
});

export const setLoginUserData = (userId, email, login, isLogin) => ({
  type: SET_LOGIN_USER_DATA,
  data: { userId, email, login, isLogin },
});

export const loginUser = (userId) => ({ type: LOGIN_USER, userId });

export const loginUserThunkCreator =
  (email, password, rememberMe) => async (dispatch) => {
    let response = await loginAPI.loginUser(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(loginThunkCreator());
    } else {
      let message =
        response.data.messages.length > 0 ? response.data.messages[0] : "Error";
      dispatch(
        stopSubmit("login", {
          _error: message,
        })
      );
    }
  };

export const logoutUserThunkCreator = () => async (dispatch) => {
  let response = await loginAPI.logoutUser();
  if (response.data.resultCode === 0) {
    dispatch(setLoginUserData(null, null, null, false));
  }
};

export const loginThunkCreator = () => async (dispatch) => {
  let response = await apiAxios.loginUser();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setLoginUserData(id, email, login, true));
  }
};

export default loginReducer;
