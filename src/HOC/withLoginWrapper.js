import React from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
let mapStateToPropsWrapper = (state) => ({ isLogin: state.loginForm.isLogin });

function isLoginWrapper(Component) {
  let ComponentContainer = (props) => {
    const params = useParams();
    if (!props.isLogin) return <Navigate return to="/login" />;
    return <Component {...props} params={params} />;
  };
  ComponentContainer = connect(mapStateToPropsWrapper)(ComponentContainer);
  return ComponentContainer;
}
export default isLoginWrapper;
