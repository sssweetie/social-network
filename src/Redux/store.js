import React from "react";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 0, message: "Hi everyone", likeCount: "15" },
        { id: 1, message: "Omg why are you here", likeCount: "23" },
      ],
      postNewText: "Here is your new post...",
    },

    messagesPage: {
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
    },
  },
  _callSubscriber() {
    console.log();
  },
  dispatch(action) {
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._callSubscriber(this.getState());
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};



export default store;
