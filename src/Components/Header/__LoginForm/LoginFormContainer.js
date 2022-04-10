import React from "react";
import { LoginForm } from "./LoginForm";
import { connect } from "react-redux";
import { loginUserThunkCreator } from "../../../Redux/loginReducer";

let mapStateToProps = (state) => {
  return { userId: state.loginForm.userId };
};

export default connect(mapStateToProps, loginUserThunkCreator)(LoginForm);
