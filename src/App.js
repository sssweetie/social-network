import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/ProfileContainer";
import Messages from "./Components/Messages/Messages";
import UsersContainer from "./Components/Users/UsersContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/Header/__LoginForm/LoginForm";
import HeaderContainer from "./Components/Header/HeaderContainer";
import React, { Component } from "react";
import { initializeThunkCreator } from "./Redux/appReducer";
import { connect, Provider } from "react-redux";
import Preloader from "./Components/Preloader/Preloader";
import store from "./Redux/redux-store";

class App extends Component {
  componentDidMount() {
    this.props.initializeThunkCreator();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer></HeaderContainer>
          <Navigation></Navigation>
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/messages/*" element={<Messages />}></Route>
              <Route path="/profile/:userId" element={<Profile />}></Route>
              <Route path="/users/*" element={<UsersContainer />}></Route>
              <Route path="/login/*" element={<LoginForm />}></Route>
            </Routes>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, {
  initializeThunkCreator,
})(App);

const MainApp = (props) => {
  return (
    <Router>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Router>
  );
};
export default MainApp;
