import React from "react";
const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
let initialState = {
  postData: [
    { id: 0, message: "Hi everyone", likeCount: "15" },
    { id: 1, message: "Omg why are you here", likeCount: "23" },
  ],
  postNewText: "Here is your new post...",
  profile: null,
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

export default profileReducer;
