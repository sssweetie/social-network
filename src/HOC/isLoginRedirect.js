import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
let mapStateToPropsConnect = (state) => ({
  isLogin: state.loginForm.isLogin,
});

export const isLoginRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isLogin) return <Navigate to="/login" />;
      return <Component {...this.props} />;
    }
  }
  let WithLoginRedirectComponent = connect(mapStateToPropsConnect)(
    RedirectComponent
  );
  return WithLoginRedirectComponent;
};
