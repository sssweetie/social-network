import React from "react";
import styles from "./Messages__DialogChoose.module.css";
import Messages__DialogChoose from "./Messages__DialogChoose";
import { connect } from "react-redux";
import { getDialogData } from "../../../Redux/selectors/messagesSelector";
let mapStateToProps = (state) => {
  return { dialogData: getDialogData(state) };
};
let mapDispatchToProps = () => {
  return {};
};

const Messages__DialogChooseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages__DialogChoose);

export default Messages__DialogChooseContainer;
