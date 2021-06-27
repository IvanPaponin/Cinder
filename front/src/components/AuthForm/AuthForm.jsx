import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { signIn } from "../../redux/actions/user";
import "../RegisterForm/RegisterForm";
import GoogleButton from 'react-google-button';

const redirectToGoogle = async () => {
  const googleURL = 'http://localhost:8080/auth/google'
  const newWindow = window.open(googleURL, "_blank", "width=500, height=600")
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AuthForm() {
  // const fetchAuth = async () => {
  //   const response = await axios.get('http://localhost:8080/auth/user', {withCredentials: true}).catch((err) => {
  //      console.log(err);
  //   });
  //   if (response.data) {
  //     console.log('User', response.data);
  //   }
  // }

  
  const classes = useStyles();
  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignIn).filter((el) =>
      el[1] ? el[1].trim() : el[1]
    );
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signIn(payload, history, from));
    }
  };

  return (
    <div className="divReg">
      <form
        onSubmit={submitHandler}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <h4>Войдите, чтобы выбрать фильм на вечер и не только</h4>
        <div>
          <TextField
            id="outlined-textarea"
            label="Электронная почта"
            name="email"
            onChange={changeHandler}
            value={userSignIn.email}
            multiline
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-textarea"
            label="Пароль"
            name="password"
            onChange={changeHandler}
            value={userSignIn.password}
            multiline
            variant="outlined"
          />
        </div>
        <Button type="submit" variant="outlined" color="primary">
          Продолжить
        </Button>
        <div>
        <Link to="/google"><GoogleButton onClick={redirectToGoogle} type="light" label='Войти через Google' /></Link>
        </div>
      </form>
      <div>Еще нет учетной записи?</div>
      <div>
        <Link to="/register"> Зарегистрируйтесь </Link>
      </div>
    </div>
  );
}
