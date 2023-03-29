import React from 'react';

export const getMessageNewText = (state) => {
  return state.messagesPage.messageNewText;
};

export const getMessageData = (state) => {
  return state.messagesPage.messageData;
};

export const getDialogData = (state) => {
  return state.messagesPage.dialogData;
};
