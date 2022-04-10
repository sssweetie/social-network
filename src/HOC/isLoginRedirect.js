import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
let mapStateToPropsWrapper = (state) => ({
  isLogin: state.loginForm.isLogin,
});

function isLoginWrapper(Component) {
  let ComponentContainer = (props) => {
    if (!props.isLogin) return <Navigate return to="/login" />;
    return <Component {...props} />;
  };
  let WithLoginComponentContainer = connect(mapStateToPropsWrapper)(
    ComponentContainer
  );
  return WithLoginComponentContainer;
}
export default isLoginWrapper;
