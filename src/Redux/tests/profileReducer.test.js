import React from "react";
import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator,
} from "../profileReducer";

let initialState = {
  postData: [
    { id: 0, message: "Hi everyone", likeCount: "15" },
    { id: 1, message: "Omg why are you here", likeCount: "23" },
  ],
};

it("post adding", () => {
  //1. test data
  let action = addPostActionCreator("something");

  //2. action
  let newState = profileReducer(initialState, action);
  //3. expectation
  expect(newState.postData.length).toBe(3);
});

it("post message changing", () => {
  //1. test data
  let action = addPostActionCreator("something");

  //2. action
  let newState = profileReducer(initialState, action);
  //3. expectation
  expect(newState.postData[2].message).toBe("something");
});

it("delete post", () => {
  let action = deletePostActionCreator(1);

  let newState = profileReducer(initialState, action);

  expect(newState.postData.length).toBe(1);
});
