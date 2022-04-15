import React from "react";
import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";

let initialState = {
  postData: [
    { id: 0, message: "Hi everyone", likeCount: "15" },
    { id: 1, message: "Omg why are you here", likeCount: "23" },
  ],
  profile: null,
  status: "",
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postData.length,
        message: action.message,
        likeCount: "0",
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        postData: [...state.postData.filter((post) => post.id !== action.id)],
      };
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (message) => ({
  type: ADD_POST,
  message: message,
});
export const deletePostActionCreator = (id) => ({
  type: DELETE_POST,
  id: id,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setUserProfileThunkCreator = (userId) => (dispatch) => {
  profileAPI
    .getUserProfile(userId)
    .then((response) => dispatch(setUserProfile(response.data)));
};

export const getStatusThunkCreator = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => dispatch(setStatus(response.data)));
};

export const updateStatusThunkCreator = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) dispatch(setStatus(status));
  });
};

export default profileReducer;
