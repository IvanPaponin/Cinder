import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions/user";
import "./RegistrationAndLogin.css";
import { useSelector } from "react-redux";
import SvgIconsColor from "../FooterIcons/FooterIcons";

export default function RegisterForm() {
  let history = useHistory();
  const dispatch = useDispatch();

  const loader = useSelector((state) => state.loader);

  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    e.persist();
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(userSignUp);

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

  return (
    <div>
      <div className="divReg">
        <form
          onSubmit={submitHandler}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <h4>
            Зарегистрируйтесь, чтобы выбрать фильм <br /> на вечер и не только
          </h4>
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
              type="password"
              multiline
              variant="outlined"
            />
          </div>
          <br />
          <Button type="submit" variant="outlined" className={classes.but}>
            Продолжить
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
      <hr />
      <footer>
        <SvgIconsColor />
      </footer>
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
  but: {
    color: "white",
    background: "#dc143c",
    //border: '2px solid #dc143c',
  },
}));
