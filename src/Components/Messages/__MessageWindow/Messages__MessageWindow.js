import React from "react";
import styles from "./Messages__MessageWindow.module.css";
import Message from "./_Message/Messages_Message";
import { reduxForm, Field } from "redux-form";
import { Element } from "../../../utils/FormControls/FormControls";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/Validators/validators";
const Textarea = Element("textarea");
const maxLength = maxLengthCreator(100);
function Messages__MessageWindow(props) {
  let messageElement = props.messageData.map((message) => (
    <Message id={message.id} key={message.id} text={message.text}></Message>
  ));
  let addMessage = (values) => {
    props.onClickAddNewMessage(values.messageInput);
  };
  return (
    <div className={styles.messageWindow}>
      {messageElement}
      <MessageWindowFormRedux onSubmit={addMessage} {...props} />
    </div>
  );
}
const MessageWindowForm = (props) => {
  let textAreaRef = React.createRef();

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="messageInput"
        component={Textarea}
        value={props.messageNewText}
        ref={textAreaRef}
        validate={[requiredField, maxLength]}
      ></Field>
      <Field name="messageSend" component="button">
        Send message
      </Field>
    </form>
  );
};

const MessageWindowFormRedux = reduxForm({ form: "MessageWindow" })(
  MessageWindowForm
);
export default Messages__MessageWindow;
