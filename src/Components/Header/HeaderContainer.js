import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { loginThunkCreator } from "../../Redux/loginReducer";
export class HeaderContainer extends Component {
  componentDidMount() {
    this.props.loginThunkCreator();
  }

  render() {
    return <Header {...this.props}></Header>;
  }
}
let mapStateToProps = (state) => ({
  isLogin: state.loginForm.isLogin,
  login: state.loginForm.login,
});
export default connect(mapStateToProps, {
  loginThunkCreator,
})(HeaderContainer);
