import React from "react";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";
let initialState = {
  dialogData: [
    {
      id: "friend1",
      text: "My Friend",
      src: "https://i.pinimg.com/736x/02/c1/a0/02c1a014dfdd07ae600275878f059e8f.jpg",
    },
    {
      id: "friend2",
      text: "My best Friend",
      src: "https://i.pinimg.com/736x/71/24/08/7124085af6f604befc015d23b891d425.jpg",
    },
    {
      id: "friend3",
      text: "My My My Friend",
      src: "https://i.pinimg.com/originals/0f/20/ae/0f20ae80252d47dc4fdb6332a583af6b.jpg",
    },
    {
      id: "friend4",
      text: "My Friend Friend",
      src: "https://demonslayer.fr/wp-content/uploads/2021/10/nezuko-Kamado-Demon-Slayer-Kimetsu-no-Yaiba-2_480x480.jpeg",
    },
  ],
  messageData: [
    { text: "Sample text", id: 1 },
    { text: "Test text", id: 2 },
    { text: "Another text", id: 3 },
  ],
  messageNewText: "Sample text",
};
function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        text: state.messageNewText,
        id: state.messageData.length,
      };
      return {
        ...state,
        messageData: [...state.messageData, newMessage],
        messageNewText: "",
      };
    }
    case UPDATE_MESSAGE: {
      return {
        ...state,
        messageNewText: action.message,
      };
    }
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE,
  message: text,
});
export default messagesReducer;
