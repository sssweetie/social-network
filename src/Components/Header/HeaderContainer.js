import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logoutUserThunkCreator } from "../../Redux/loginReducer";
export class HeaderContainer extends Component {
  render() {
    return <Header {...this.props}></Header>;
  }
}
let mapStateToProps = (state) => ({
  isLogin: state.loginForm.isLogin,
  login: state.loginForm.login,
  userId: state.loginForm.userId,
});
export default connect(mapStateToProps, {
  logoutUserThunkCreator,
})(HeaderContainer);
