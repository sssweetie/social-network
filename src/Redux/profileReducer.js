import React from "react";
import { profileAPI } from "../API/api";

const ADD_POST = "profileReducer/ADD-POST";
const SET_USER_PROFILE = "profileReducer/SET-USER-PROFILE";
const SET_STATUS = "profileReducer/SET-STATUS";
const DELETE_POST = "profileReducer/DELETE-POST";
const SAVE_PHOTO = "profileReducer/SAVE-PHOTO";

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
        postData: state.postData.filter((post) => post.id !== action.id),
      };
    }
    case SAVE_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
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

export const savePhoto = (photos) => ({
  type: SAVE_PHOTO,
  photos,
});

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setUserProfileThunkCreator = (userId) => async (dispatch) => {
  let response = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatusThunkCreator = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) dispatch(setStatus(status));
};

export const savePhotoThunkCreator = (file) => async (dispatch) => {
  debugger;
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhoto(response.data.data.photos));
    console.log(response.data.data.photos);
  }
};

export default profileReducer;
