import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setLoginUserData } from "../../Redux/loginReducer";
import axios from "axios";
export class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
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
