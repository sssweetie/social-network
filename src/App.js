import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';

import store from './Redux/redux-store';
import { getInitialized } from './Redux/selectors/appSelector';
import { getUserId } from './Redux/selectors/loginSelector';
import { initializeThunkCreator } from './Redux/appReducer';

import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import FriendsContainer from './Components/Friends/FriendsContainer';
import Preloader from './Components/Preloader/Preloader';

const Messages = React.lazy(() => import('./Components/Messages/Messages'));
const LoginForm = React.lazy(() =>
  import('./Components/Header/__LoginForm/LoginForm')
);
const UsersContainer = React.lazy(() =>
  import('./Components/Users/UsersContainer')
);

class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert('502');
  };
  componentDidMount() {
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    this.props.initializeThunkCreator();
  }
  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors
    );
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navigation userId={this.props.userId} />
          <div className="app-wrapper-content">
            <React.Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/messages/*" element={<Messages />} />
                <Route path="/profile/:userId" element={<Profile />} />
                <Route path="/users/*" element={<UsersContainer />} />
                <Route path="/login/*" element={<LoginForm />} />
                <Route path="/friends/*" element={<FriendsContainer />} />
                <Route path="*" element={<div>Bad Gateway 502</div>} />
              </Routes>
            </React.Suspense>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  initialized: getInitialized(state),
  userId: getUserId(state),
});

const AppContainer = connect(mapStateToProps, {
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
