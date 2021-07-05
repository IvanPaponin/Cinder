import React from "react";
import MainPage from "./components/MainPage/MainPage";
import AppBar from "./components/AppBar/AppBar";
import AuthForm from './components/AuthForm/AuthForm'
import Signout from './components/Signout/Signout';
import ButtonsForCard from "./components/ButtonsForCard/ButtonsForCard";
// import Googlebutton from './components/GoogleButton/GoogleButton';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Profile from './components/Profile/Profile';
import LoginSuccess from './components/LoginSuccess/LoginSuccess';
import { useThemeContext } from "./context/context";


function App() {

  const { theme, setTheme, anotherThemeSet } = useThemeContext()

  return (

    <>
      <div className={theme ? "App1" : "App2"}>
        <Router>
          <AppBar />

          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={AuthForm} />
            <Route exact path="/logout" component={Signout} />
            {/* <Route exact path="/test" component={Questionnaire} /> */}
            {/* <Route exact path="/login/google" component={Googlebutton} /> */}
            <Route exact path="/login/google" />
            {/* <Route exact path="/profile" component={Profiler} /> */}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/game" component={ButtonsForCard} />
            <Route exact path="/login/success" component={LoginSuccess} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
export default App;
