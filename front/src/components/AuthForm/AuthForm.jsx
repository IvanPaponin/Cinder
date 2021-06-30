import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { signIn } from "../../redux/actions/user";

import GoogleButton from "react-google-button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  but: {
    color: "purple",
    border: "2px solid purple",
  },
}));

export default function AuthForm() {
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
      <div>
        <form
          onSubmit={submitHandler}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <h4>
            Войдите, чтобы выбрать фильм <br />
            на вечер и не только
          </h4>
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
              color="red"
            />
          </div>
          <Button type="submit" variant="outlined" className={classes.but}>
            Продолжить
          </Button>
          <div>
            <a href="http://localhost:8080/auth/google">
              <GoogleButton
                type="light"
                label="Войти через Google"
                className="googleBut"
              />
            </a>
          </div>
        </form>
        <div>Еще нет учетной записи?</div>
        <div>
          <Link to="/register"> Зарегистрируйтесь </Link>
        </div>
      </div>
    </div>
  );
}
