import MainPage from "./components/MainPage/MainPage";
import AppBar from "./components/AppBar/AppBar";
import AuthForm from './components/AuthForm/AuthForm'
import Signout from './components/Signout/Signout';
import ButtonsForCard from "./components/ButtonsForCard/ButtonsForCard";
// import Googlebutton from './components/GoogleButton/GoogleButton';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Profile from './components/Profile/Profile';
function App() {
  return (
    <>
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={AuthForm}/>
        <Route exact path="/logout" component={Signout}/>
        <Route exact path="/login/google" />
        {/* <Route exact path="/profile" component={Profiler} /> */}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/game" component={ButtonsForCard} />
      </Switch>
    </Router>
    </>
  );
}
export default App;
