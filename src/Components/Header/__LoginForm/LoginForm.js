import React from "react";
import { reduxForm, Field } from "redux-form";
import { Element } from "../../../utils/FormControls/FormControls";
import { requiredField } from "../../../utils/Validators/validators";
const Input = Element("input");
function LoginPage(props) {
  const pushData = (formData) => {
    props.loginUserThunkCreator(
      formData.email,
      formData.password,
      formData.rememberMe,
      null
    );
  };

  return (
    <LoginReduxForm
      loginUserThunkCreator={props.loginUserThunkCreator}
      onSubmit={pushData}
    ></LoginReduxForm>
  );
}

const LoginForm = (props) => {
  return (
    <form
      loginUserThunkCreator={props.loginUserThunkCreator}
      onSubmit={props.handleSubmit}
    >
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
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginPage;
