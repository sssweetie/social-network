import React from "react";
import styles from "./Messages__MessageWindow.module.css";
import Message from "./_Message/Messages_Message";
function Messages__MessageWindow(props) {
  let messageElement = props.messageData.map((message) => (
    <Message id={message.id} key={message.id} text={message.text}></Message>
  ));

  let textAreaRef = React.createRef();

  let onClickAddMessage = () => {
    props.onClickAddNewMessage();
  };

  let onChangeUpdateMessage = () => {
    props.onChangeUpdateNewMessage(textAreaRef.current.value);
  };

  return (
    <div className={styles.messageWindow}>
      {messageElement}
      <textarea
        onChange={onChangeUpdateMessage}
        value={props.messageNewText}
        ref={textAreaRef}
      ></textarea>
      <button onClick={onClickAddMessage}>Send message</button>
    </div>
  );
}

export default Messages__MessageWindow;
