import React from "react";
const IS_FOLLOWED = "IS-FOLLOWED";
const SET_USERS = "SET-USERS";
let initialState = {
  users: [
    {
      id: "1",
      name: "Aleksandr Tokarev",
      status: "Welcome to the club",
      location: {
        country: "Russia",
        city: "Volgograd",
      },
      followed: false,
      avatar:
        "http://pm1.narvii.com/7501/8f4cc5dbb7c44817825e7980169728b9e80df31fr1-600-900v2_uhq.jpg",
    },
    {
      id: "2",
      name: "Dmitriy Tokarev",
      status: "Welcome",
      location: {
        country: "Belgium",
        city: "Geel",
      },
      followed: true,
      avatar:
        "http://pm1.narvii.com/7501/8f4cc5dbb7c44817825e7980169728b9e80df31fr1-600-900v2_uhq.jpg",
    },
    {
      id: "3",
      name: "Dan Tokarev",
      status: "Welcome to",
      location: {
        country: "Russia",
        city: "Moscow",
      },
      followed: true,
      avatar:
        "http://pm1.narvii.com/7501/8f4cc5dbb7c44817825e7980169728b9e80df31fr1-600-900v2_uhq.jpg",
    },
    {
      id: "4",
      name: "Max Tokarev",
      status: "Welcome to the",
      location: {
        country: "Russia",
        city: "Omsk",
      },
      followed: false,
      avatar:
        "http://pm1.narvii.com/7501/8f4cc5dbb7c44817825e7980169728b9e80df31fr1-600-900v2_uhq.jpg",
    },
  ],
};
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FOLLOWED: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.userID === action.userID) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, action.users] };
    }
    default:
      return state;
  }
}

export const onToggleFollowActionCreator = (userID) => ({
  type: IS_FOLLOWED,
  userID,
});
export const setUsersActionCreator = () => ({ type: SET_USERS });
export default usersReducer;
