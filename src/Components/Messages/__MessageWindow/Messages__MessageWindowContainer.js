import React from "react";
import Messages__MessageWindow from "./Messages__MessageWindow";
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from "../../../Redux/messagesReducer";
import { connect } from "react-redux";
let mapStateToProps = (state) => {
  return {
    messageNewText: state.messagesPage.messageNewText,
    messageData: state.messagesPage.messageData,
    isLogin: state.loginForm.isLogin,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onChangeUpdateNewMessage: (message) =>
      dispatch(updateMessageActionCreator(message)),
    onClickAddNewMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};
const Messages__MessageWindowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages__MessageWindow);

export default Messages__MessageWindowContainer;
