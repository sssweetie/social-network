import React from 'react';

import { loginThunkCreator } from './loginReducer';

const SET_INITIALIZE = 'appReducer/SET-INITIALIZE';

const initialState = {
  initialized: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
  case SET_INITIALIZE: {
    return { ...state, initialized: true };
  }
  default:
    return state;
  }
}

export const setInitializeActionCreator = () => ({
  type: SET_INITIALIZE,
});

export const initializeThunkCreator = () => (dispatch) => {
  const promise = dispatch(loginThunkCreator());
  Promise.all([promise]).then(() => {
    dispatch(setInitializeActionCreator());
  });
};

export default appReducer;
