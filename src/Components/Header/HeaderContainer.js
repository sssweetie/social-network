import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setLoginUserData } from "../../Redux/loginReducer";
import { apiAxios } from "../../API/api";
export class HeaderContainer extends Component {
  componentDidMount() {
    apiAxios.loginUser().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data;
        this.props.setLoginUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props}></Header>;
  }
}
let mapStateToProps = (state) => ({
  isLogin: state.loginForm.isLogin,
  login: state.loginForm.login,
});
export default connect(mapStateToProps, { setLoginUserData })(HeaderContainer);
