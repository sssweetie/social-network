import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Messages_Dialog.module.css';
function Messages_Dialog(props) {
  const path = '/messages/' + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.text}</NavLink>
    </div>
  );
}

export default Messages_Dialog;
