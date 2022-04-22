import React from "react";
import { reduxForm, Field } from "redux-form";
import { Element } from "../../../utils/FormControls/FormControls";
import { requiredField } from "../../../utils/Validators/validators";
import { connect } from "react-redux";
import {
  loginUserThunkCreator,
  getCaptchaThunkCreator,
} from "../../../Redux/loginReducer";
import { Navigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { createField } from "../../../utils/FormControls/FormControls";
const Input = Element("input");

const LoginForm = ({ handleSubmit, error, captcha }) => {
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2>Login</h2>
      {createField("email", Input, [requiredField], "email", "", styles.field)}
      {createField(
        "password",
        Input,
        [requiredField],
        "password",
        "password",
        styles.field
      )}
      {captcha && <img src={captcha}> </img>}
      {captcha && createField("captcha", Input, [requiredField], "captcha")}
      <div className={styles.rememberMe}>
        <label for="rememberMe">Remember me</label>
        {createField("", Input, [], "rememberMe", "checkbox", "")}
      </div>

      {error ? <div className={styles.formError}>{error}</div> : ""}
      <button className={styles.login}>Login</button>
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
  return (
    <LoginReduxForm
      onSubmit={pushData}
      captcha={props.captcha}
    ></LoginReduxForm>
  );
}
const mapStateToProps = (state) => ({
  isLogin: state.loginForm.isLogin,
  captcha: state.loginForm.captcha,
});
export default connect(mapStateToProps, {
  loginUserThunkCreator,
  getCaptchaThunkCreator,
})(LoginPage);
