import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
const mapStateToPropsWrapper = (state) => ({
  isLogin: state.loginForm.isLogin,
});

function isLoginWrapper(Component) {
  const ComponentContainer = (props) => {
    if (!props.isLogin) return <Navigate return to="/login" />;
    return <Component {...props} />;
  };
  const WithLoginComponentContainer = connect(mapStateToPropsWrapper)(
    ComponentContainer
  );
  return WithLoginComponentContainer;
}
export default isLoginWrapper;
