import { applyMiddleware, combineReducers, createStore } from "redux";
import loginReducer from "./loginReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import { reducer as formReducer } from "redux-form";
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  loginForm: loginReducer,
  app: appReducer,
  form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
