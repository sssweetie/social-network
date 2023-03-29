import React from 'react';
import { stopSubmit } from 'redux-form';

import { apiAxios, loginAPI, securityAPI } from '../API/api';

const SET_LOGIN_USER_DATA = 'loginReducer/SET-LOGIN-USER-DATA';
const LOGIN_USER = 'loginReducer/LOGIN-USER';
const CHECK_OWNER = 'loginReducer/CHECK-OWNER';
const GET_CAPTCHA = 'loginReducer/GET-CAPTCHA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
  isOwner: false,
  captcha: null,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_OWNER:
      return { ...state, isOwner: action.status };
    case SET_LOGIN_USER_DATA:
      return { ...state, ...action.data };
    case LOGIN_USER:
      return { ...state, userId: action.userId };
    case GET_CAPTCHA:
      return { ...state, captcha: action.captcha };
    default:
      return state;
  }
}

export const checkOwnerStatus = (status) => ({
  type: CHECK_OWNER,
  status: status,
});

export const getCaptchaUrl = (captcha) => ({
  type: GET_CAPTCHA,
  captcha: captcha,
});

export const setLoginUserData = (userId, email, login, isLogin) => ({
  type: SET_LOGIN_USER_DATA,
  data: { userId, email, login, isLogin },
});

export const loginUser = (userId) => ({ type: LOGIN_USER, userId });

export const loginUserThunkCreator =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await loginAPI.loginUser(
      email,
      password,
      rememberMe,
      captcha
    );
    if (response.data.resultCode === 0) {
      dispatch(loginThunkCreator());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaThunkCreator());
      }
      const message =
        response.data.messages.length > 0 ? response.data.messages[0] : 'Error';
      dispatch(
        stopSubmit('login', {
          _error: message,
        })
      );
    }
  };

export const logoutUserThunkCreator = () => async (dispatch) => {
  const response = await loginAPI.logoutUser();
  if (response.data.resultCode === 0) {
    dispatch(setLoginUserData(null, null, null));
  }
};

export const loginThunkCreator = () => async (dispatch) => {
  const response = await apiAxios.loginUser();
  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setLoginUserData(id, email, login, true));
  }
};

export const getCaptchaThunkCreator = () => async (dispatch) => {
  const response = await securityAPI.getCaptcha();
  const captcha = response.data.url;
  dispatch(getCaptchaUrl(captcha));
};

export default loginReducer;
