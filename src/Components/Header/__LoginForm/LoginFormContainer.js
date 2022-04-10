import React from "react";
import { LoginForm } from "./LoginForm";
import { connect } from "react-redux";
import { loginUserThunkCreator } from "../../../Redux/loginReducer";

function LoginFormContainer(props) {
  return <LoginForm {...props}></LoginForm>;
}

let mapStateToProps = (state) => ({
  userId: state.loginForm.userId,
});

export default connect(
  mapStateToProps,
  loginUserThunkCreator
)(LoginFormContainer);
