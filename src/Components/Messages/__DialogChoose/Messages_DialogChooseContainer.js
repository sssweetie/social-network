import React from 'react';

import { connect } from 'react-redux';

import { getDialogData } from '../../../Redux/selectors/messagesSelector';

import styles from './Messages__DialogChoose.module.css';
import Messages__DialogChoose from './Messages__DialogChoose';

const mapStateToProps = (state) => {
  return { dialogData: getDialogData(state) };
};

const mapDispatchToProps = () => {
  return {};
};

const Messages__DialogChooseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages__DialogChoose);

export default Messages__DialogChooseContainer;
