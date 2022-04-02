import React from "react";
import Dialog from "./_Dialog/Messages_Dialog";
import styles from "./Messages__DialogChoose.module.css";
function Messages__DialogChoose(props) {
  let elements = props.dialogData.map((props) => {
    return (
      <div className={styles.element}>
        <img className={styles.ava} src={props.src}></img>
        <Dialog text={props.text} key={props.id} id={props.id}></Dialog>
      </div>
    );
  });

  return (
    <div>
      <div className={styles.dialogChoose}>{elements}</div>
    </div>
  );
}

export default Messages__DialogChoose;
