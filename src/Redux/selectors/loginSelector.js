import React from "react";

export const getUserId = (state) => {
  return state.loginForm.userId;
};

export const getIsLogin = (state) => {
  return state.loginForm.isLogin;
};

export const getIsOwner = (state) => {
  return state.loginForm.isOwner;
};
