import React from 'react';

import styles from './Messages.module.css';
import DialogChoose from './__DialogChoose/Messages_DialogChooseContainer';
import MessageWindow from './__MessageWindow/Messages__MessageWindowContainer';

function Messages(props) {
  return (
    <div className={styles.messages}>
      <DialogChoose></DialogChoose>
      <MessageWindow></MessageWindow>
    </div>
  );
}

export default Messages;
