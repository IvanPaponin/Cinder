import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
// import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import ShareButton from "../ShareButton/ShareButton";
import TabPanel from "../LikedFilmsList/LikedFilmsList";
import "./Profile.css";
import SvgIconsColor from "../FooterIcons/FooterIcons";
import { initLikedFilms } from "../../redux/actions/userLikesFilmCreator";
import { initSuperLikedFilms } from "../../redux/actions/userSuperlikesCreator";
import { editUserThunk, getUserFromServer } from "../../redux/actions/user";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useThemeContext } from "../../context/context";
import { initViewedFilms } from "../../redux/actions/userViewedFilm";

axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  formControl: {
    margin: theme.spacing(3),
  },
  // text: {
  //   color: " white !important"
  // },ttttt
  but: {
    color: "white",
    background: "#dc143c",
    //border: '2px solid #dc143c',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const { theme, setTheme, anotherThemeSet } = useThemeContext();
  const [image, setImage] = useState("");

  useEffect(() => {
    if (user === null) {
      dispatch(getUserFromServer());
    }
    if (user !== null) {
      setUserUpdate({
        username: user.username || "",
        userLastName: user.userLastName || "",
        date: user.birthday || "",
        email: user.email || "",
        nickname: user.nickname || "",
        sex: user.sex || "",
        id: user?._id,
      });
    }
    // dispatch(initLikedFilms());
    // dispatch(initSuperLikedFilms());
    //  dispatch(initViewedFilms());
  }, [user]);

  const [editUserFlag, setEditUserFlag] = useState(false);

  const [userUpdate, setUserUpdate] = useState({
    username: user?.username || "",
    userLastName: user?.userLastName || "",
    date: user?.birthday || "",
    email: user?.email || "",
    nickname: user?.nickname || "",
    sex: user?.sex || "",
    id: user?._id,
  });

  const [drag, setDrag] = useState(false);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    dispatch(initLikedFilms());
    dispatch(initSuperLikedFilms());
    dispatch(initViewedFilms());
  }, []);

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }
  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }
  function onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    const formData = new FormData();
    formData.append("file", files[0]);

    axios
      .post("http://localhost:8080/api/v1/fotos", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        setImage(res.data);
        // console.log(res.data);
      });

    setDrag(false);
  }

  const changeHandler = (e) => {
    e.persist();
    setUserUpdate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandl = (e) => {
    e.preventDefault();
    dispatch(editUserThunk(userUpdate));
    setEditUserFlag(false);
  };

  console.log(userUpdate);

  return (
    <div>
      <div className="twoComp">
        <div className={theme ? "divProfile" : "divProfile2"}>
          <h4>Изменить личные данные</h4>
          <img src={image} alt="" />
          <div>
            {drag ? (
              <div
                onDragLeave={(e) => dragStartHandler(e)}
                onDragStart={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragStartHandler(e)}
                onDrop={(e) => onDropHandler(e)}
              >
                Отпустите фото, чтобы его загрузить
              </div>
            ) : (
              <div
                onDragLeave={(e) => dragStartHandler(e)}
                onDragStart={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragStartHandler(e)}
              >
                Перетащите сюда фото,
                <br /> чтобы его загрузить
              </div>
            )}
          </div>
          <br />

          <Button
            type="submit"
            variant="contained"
            className={classes.but}
            onClick={() => setEditUserFlag(!editUserFlag)}
          >
            {editUserFlag ? "Скрыть редактирование" : "Редактировать профиль"}
          </Button>

          <br />

          {editUserFlag && (
            <form
              onSubmit={submitHandl}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <div>
                  <TextField
                    onChange={changeHandler}
                    name="username"
                    id="outlined-textarea"
                    label="Ваше имя"
                    multiline
                    variant="outlined"
                    value={userUpdate.username}
                    className={classes.text}
                  />
                </div>

                <TextField
                  onChange={changeHandler}
                  name="userLastName"
                  id="outlined-textarea"
                  label="Ваша фамилия"
                  multiline
                  variant="outlined"
                  value={userUpdate.userLastName}
                />

                <div>
                  <TextField
                    onChange={changeHandler}
                    id="outlined-textarea"
                    name="email"
                    // value={userSignUp.email}
                    label="Электронная почта"
                    multiline
                    variant="outlined"
                    className={classes.text}
                    value={userUpdate.email}

                  />
                </div>
                <div>
                  <TextField
                    onChange={changeHandler}
                    id="date"
                    name="date"
                    label="Дата рождения"
                    type="date"
                    // defaultValue="1995-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={userUpdate.date}
                  />
                </div>
                <div>
                  <TextField
                    onChange={changeHandler}
                    id="outlined-textarea"
                    name="nickname"
                    label="Никнейм"
                    multiline
                    variant="outlined"
                    value={userUpdate.nickname}
                  />
                </div>

                <RadioGroup
                  aria-label="quiz"
                  name="sex"
                  onChange={changeHandler}
                >
                  <FormControlLabel
                    value="мужской"
                    control={<Radio />}
                    label="Мужской"
                    checked={userUpdate.sex === "мужской" && "checked"}
                  />
                  <FormControlLabel
                    value="женский"
                    control={<Radio />}
                    label="Женский"
                    checked={userUpdate.sex === "женский" && "checked"}
                  />
                  <FormControlLabel
                    value="не указано"
                    control={<Radio />}
                    label="Не указано"
                    checked={userUpdate.sex === "не указано" && "checked"}
                  />
                </RadioGroup>

                <Button
                  type="submit"
                  variant="outlined"
                  className={classes.but}
                >
                  Продолжить
                </Button>
              </FormControl>
            </form>
          )}

          {!editUserFlag && (
            <div className="profileInfo">
              <span className={theme ? "spanOfProfile" : "spanOfProfile2"}>
                {userUpdate.username} {userUpdate.userLastName}
              </span>
              <br />
              <br />
              <span className={theme ? "spanOfProfile" : "spanOfProfile2"}>
                Email:
              </span>
              <span className="spanTwo">{userUpdate.email}</span>
              <br />
              <br />
              <span className={theme ? "spanOfProfile" : "spanOfProfile2"}>
                Дата рождения:
              </span>{" "}
              <span className="spanTwo">{userUpdate.date}</span>
              <br />
              <br />
              <span className={theme ? "spanOfProfile" : "spanOfProfile2"}>
                Никнейм:
              </span>{" "}
              <span className="spanTwo">{userUpdate.nickname}</span>
              <br />
              <br />
              <span className={theme ? "spanOfProfile" : "spanOfProfile2"}>
                Пол:
              </span>{" "}
              <span className="spanTwo">{userUpdate.sex}</span>
              <br />
              <br />
            </div>
          )}
        </div>
        <TabPanel />
      </div>
      <hr />
      <footer>
        <SvgIconsColor />
      </footer>
    </div>
  );
}

export default React.memo(Profile);
