import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/ProfileContainer";
import Messages from "./Components/Messages/Messages";
import UsersContainer from "./Components/Users/UsersContainer";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Components/Header/__LoginForm/LoginForm";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
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
};
export default App;
