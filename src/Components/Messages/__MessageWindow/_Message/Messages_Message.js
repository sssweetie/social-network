import React from 'react';

import styles from './Messages_Message.module.css';
function Messages_Message(props) {
  return <div className={styles.message}>{props.text}</div>;
}

export default Messages_Message;
