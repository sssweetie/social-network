import React from "react";
import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  postData: [
    { id: 0, message: "Hi everyone", likeCount: "15" },
    { id: 1, message: "Omg why are you here", likeCount: "23" },
  ],
  postNewText: "Here is your new post...",
  profile: null,
  status: "",
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postData.length,
        message: state.postNewText,
        likeCount: "0",
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        postNewText: "",
      };
    }
    case UPDATE_POST: {
      return { ...state, postNewText: action.postMessage };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateTextActionCreator = (text) => ({
  type: UPDATE_POST,
  postMessage: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setUserProfileThunkCreator = (userId) => (dispatch) => {
  if (!userId) {
    userId = 23246;
  }
  profileAPI
    .getUserProfile(userId)
    .then((data) => dispatch(setUserProfile(data)));
};

export const getStatusThunkCreator = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => dispatch(setStatus(response.data)));
};

export const updateStatusThunkCreator = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.resultCode === 0) dispatch(setStatus(status));
  });
};

export default profileReducer;
