import React from "react";
import Contacts from "./Contacts/Contacts";
function ContactInfo(props) {
  return (
    <div>
      Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}
      <br></br>
      {props.profile.lookingForAJob &&
        `Description: ${props.profile.lookingForAJobDescription}`}
      <br></br>
      Fullname: {props.profile.fullName}
      <br></br>
      About me: {props.profile.aboutMe}
      <br></br>
      Contacts:
      {Object.keys(props.profile.contacts).map((key) => (
        <Contacts
          key={key}
          contactTitle={key}
          contactValue={props.profile.contacts[key]}
        ></Contacts>
      ))}
      {props.isOwner ? (
        <button onClick={props.activateEditMode}>Edit</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default ContactInfo;
