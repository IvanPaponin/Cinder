import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions/user";
import "./RegistrationAndLogin.css";

export default function RegisterForm() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignUp).filter((el) =>
      el[1] ? el[1].trim() : el[1]
    );
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signUp(payload, history));
    }
  };

  const classes = useStyles();

  // console.log(userSignUp);

  return (
    <div className="divReg">
      <form
        onSubmit={submitHandler}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <h4>Зарегистрируйтесь, чтобы выбрать фильм на вечер и не только</h4>
        <div>
          <TextField
            onChange={changeHandler}
            name="username"
            id="outlined-textarea"
            label="Ваше имя"
            multiline
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={changeHandler}
            id="outlined-textarea"
            name="email"
            value={userSignUp.email}
            label="Электронная почта"
            multiline
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={changeHandler}
            id="outlined-textarea"
            name="password"
            label="Пароль"
            multiline
            variant="outlined"
          />
        </div>
        <Button type="submit" variant="outlined" color="primary">
          Продолжить
        </Button>
      </form>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
