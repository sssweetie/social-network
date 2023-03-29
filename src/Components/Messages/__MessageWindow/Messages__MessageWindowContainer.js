import React from 'react';

import { connect } from 'react-redux';

import { compose } from 'redux';

import { addMessageActionCreator } from '../../../Redux/messagesReducer';
import isLoginWrapper from '../../../HOC/isLoginRedirect';


import {
  getMessageData,
  getMessageNewText,
} from '../../../Redux/selectors/messagesSelector';

import Messages__MessageWindow from './Messages__MessageWindow';
const mapStateToProps = (state) => {
  return {
    messageNewText: getMessageNewText(state),
    messageData: getMessageData(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAddNewMessage: (message) => {
      dispatch(addMessageActionCreator(message));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  isLoginWrapper
)(Messages__MessageWindow);
