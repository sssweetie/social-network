import React from "react";
import { reduxForm, Field } from "redux-form";
import { Element } from "../../../utils/FormControls/FormControls";
import { requiredField } from "../../../utils/Validators/validators";
import { connect } from "react-redux";
import { loginUserThunkCreator } from "../../../Redux/loginReducer";
import { Navigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
const Input = Element("input");

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="email"
        component={Input}
        validate={[requiredField]}
        name="email"
      ></Field>
      <Field
        placeholder="password"
        component={Input}
        validate={[requiredField]}
        name="password"
      ></Field>
      <Field
        type="checkbox"
        component={Input}
        validate={[requiredField]}
        name="rememberMe"
      ></Field>
      remember me
      {props.error ? <div className={styles.formError}>{props.error}</div> : ""}
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

function LoginPage(props) {
  const pushData = (formData) => {
    props.loginUserThunkCreator(
      formData.email,
      formData.password,
      formData.rememberMe
    );
  };
  if (props.isLogin) return <Navigate return to="/profile"></Navigate>;
  return <LoginReduxForm onSubmit={pushData}></LoginReduxForm>;
}
const mapStateToProps = (state) => ({ isLogin: state.loginForm.isLogin });
export default connect(mapStateToProps, { loginUserThunkCreator })(LoginPage);
