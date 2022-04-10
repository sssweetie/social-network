import React from "react";
import { reduxForm, Field } from "redux-form";

function LoginPage(props) {
  const onSubmit = (formData) => {
    props.loginUserThunkCreator(
      formData.email,
      formData.password,
      formData.rememberMe,
      null
    );
  };

  return (
    <div>
      <LoginReduxForm {...props} onSubmit={onSubmit}></LoginReduxForm>
    </div>
  );
}

const LoginForm = (props) => {
  return (
    <form {...props} onSubmit={props.handleSubmit}>
      <Field placeholder="email" component="input" name="email"></Field>
      <Field placeholder="password" component="input" name="password"></Field>
      <Field type="checkbox" component="input" name="rememberMe"></Field>
      remember me 
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginPage;
