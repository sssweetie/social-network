import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
const mapStateToPropsWrapper = (state) => ({ isLogin: state.loginForm.isLogin });

function isLoginWrapper(Component) {
  const ComponentContainer = (props) => {
    const params = useParams();
    if (!props.isLogin) return <Navigate return to="/login" />;
    return <Component {...props} params={params} />;
  };
  const WithLoginComponentContainer = connect(mapStateToPropsWrapper)(
    ComponentContainer
  );
  return WithLoginComponentContainer;
}
export default isLoginWrapper;
