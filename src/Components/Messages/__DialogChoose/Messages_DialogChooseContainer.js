import React from "react";
import styles from "./Messages__DialogChoose.module.css";
import Messages__DialogChoose from "./Messages__DialogChoose";
import { connect } from "react-redux";
let mapStateToProps = (state) => {
  return { dialogData: state.messagesPage.dialogData };
};
let mapDispatchToProps = () => {
  return {};
};

const Messages__DialogChooseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages__DialogChoose);

export default Messages__DialogChooseContainer;
