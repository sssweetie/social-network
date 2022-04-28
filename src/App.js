import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/ProfileContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import React, { Component } from "react";
import { initializeThunkCreator } from "./Redux/appReducer";
import { connect, Provider } from "react-redux";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import Preloader from "./Components/Preloader/Preloader";
import store from "./Redux/redux-store";

const Messages = React.lazy(() => import("./Components/Messages/Messages"));

const LoginForm = React.lazy(() =>
  import("./Components/Header/__LoginForm/LoginForm")
);

const UsersContainer = React.lazy(() =>
  import("./Components/Users/UsersContainer")
);

class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("bla");
  };
  componentDidMount() {
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    this.props.initializeThunkCreator();
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer></HeaderContainer>
          <Navigation userId={this.props.userId}></Navigation>
          <div className="app-wrapper-content">
            <React.Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/messages/*" element={<Messages />}></Route>
                <Route path="/profile/:userId" element={<Profile />}></Route>
                <Route path="/users/*" element={<UsersContainer />}></Route>
                <Route path="/login/*" element={<LoginForm />}></Route>
                <Route path="/friends/*" element={<FriendsContainer />}></Route>
                <Route path="*" element={<div>404 not found</div>}></Route>
              </Routes>
            </React.Suspense>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  userId: state.loginForm.userId,
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
