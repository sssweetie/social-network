import "./App.css";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/ProfileContainer";
import Messages from "./Components/Messages/Messages";
import UsersContainer from "./Components/Users/UsersContainer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <Navigation></Navigation>
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/messages/*" element={<Messages />}></Route>
          <Route path="/profile/*" element={<Profile />}></Route>
          <Route path="/users/*" element={<UsersContainer />}></Route>
        </Routes>
      </div>
    </div>
  );
};
export default App;
