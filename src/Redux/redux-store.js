import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';

import loginReducer from './loginReducer';
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import appReducer from './appReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  loginForm: loginReducer,
  app: appReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
