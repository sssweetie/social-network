import React from "react";
import styles from "./Messages__MessageWindow.module.css";
import Message from "./_Message/Messages_Message";
import { reduxForm, Field } from "redux-form";
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

  // let onClickAddMessage = () => {
  //   props.onClickAddNewMessage();
  // };

  return (
    <form onSubmit={props.handleSubmit}>
      {/* <Field
        name="messageInput"
        component={"textarea"}
        onChange={onChangeUpdateMessage}
        value={props.messageNewText}
        ref={textAreaRef}
      ></Field> */}
      {/* <Field name="messageSend" component="button" onClick={onClickAddMessage}>
        Send message
      </Field> */}
      <Field
        name="messageInput"
        component={"textarea"}
        value={props.messageNewText}
        ref={textAreaRef}
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
