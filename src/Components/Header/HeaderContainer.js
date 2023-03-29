import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUserThunkCreator } from '../../Redux/loginReducer';

import Header from './Header';

export class HeaderContainer extends Component {
  render() {
    return <Header {...this.props}></Header>;
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginForm.isLogin,
  login: state.loginForm.login,
  userId: state.loginForm.userId,
});

export default connect(mapStateToProps, {
  logoutUserThunkCreator,
})(HeaderContainer);
