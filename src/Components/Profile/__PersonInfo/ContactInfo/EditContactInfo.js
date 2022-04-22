import React from "react";
import { reduxForm } from "redux-form";
import { createField } from "../../../../utils/FormControls/FormControls";
import { Element } from "../../../../utils/FormControls/FormControls";
import styles from "../../../../utils/FormControls/FormControls.module.css";
const Input = Element("input");
const Textarea = Element("textarea");

function EditContactInfo(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.error && (
        <div
          className={
            styles.formControls + " " + (props.error ? styles.error : "")
          }
        >
          <label>{props.error}</label>
        </div>
      )}
      Looking for a job:
      {createField("", Input, [], "lookingForAJob", "checkbox")}
      <br></br>
      My professional skills:
      {createField(
        "Put your description here...",
        Textarea,
        [],
        "lookingForAJobDescription"
      )}
      <br></br>
      About me: {createField("About me...", Textarea, [], "aboutMe")}
      <br></br>
      Fullname: {createField("FullName", Input, [], "fullName")}
      <br></br>
      Contacts:
      {Object.keys(props.profile.contacts).map((key) => (
        <div key={key}>
          {key}: {createField(key, Input, [], "contacts." + key)}
        </div>
      ))}
      <button type="submit" onClick={props.onSubmitData}>
        Save
      </button>
    </form>
  );
}

const EditContactInfoForm = reduxForm({ form: "editProfile" })(EditContactInfo);

export default EditContactInfoForm;
