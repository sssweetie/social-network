import React from "react";
import styles from "./Messages_Dialog.module.css";
import { NavLink } from "react-router-dom";
function Messages_Dialog(props) {
  let path = "/messages/" + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.text}</NavLink>
    </div>
  );
}

export default Messages_Dialog;
