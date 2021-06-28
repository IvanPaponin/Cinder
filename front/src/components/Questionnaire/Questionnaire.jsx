import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring"; // web.cjs is required for IE 11 supportъ
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import { useState, useEffect } from "react";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 500,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    minWidth: 500,
    fontSize: 30,
    backgroundColor: "#4c494c",
    color: "white",
    border: "1px solid #802bb1",
  },
  paper: {
    backgroundColor: "#564f6f",
    minWidth: 125,
    border: "3px solid #802bb1",
    borderRadius: "10px",
    // boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
  },
  content: {
    display: "flex",
  },
  // bullet: {
  //   display: "inline-block",
  //   margin: "0 2px",
  //   transform: "scale(0.8)",
  // },
  title: {
    fontSize: 20,
    color: "white",
  },
  pos: {
    marginBottom: 2,
  },
  button: {
    backgroundColor: "#564f6f",
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    jenre: [],
    withWhom: "",
    mood: "",
  });
  const [userJenre, setUserJenre] = useState([]);
  const [show, setShow] = useState(false);
  const [second, setSecond] = useState(true);
  const [base, setBase] = useState({});
  console.log(base);
  // console.log(base.genre);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/test")
      .then((res) => setBase(res.data));
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShow(false);
    setSecond(true);
    axios.post("http://localhost:8080/api/v1/compilation", value);
    setUserJenre({});
    setValue({
      jenre: [],
      withWhom: "",
      mood: "",
    });
  };
  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setValue((prev) => ({ ...prev, jenre: userJenre }));
  };
  console.log(value);

  const handleShow = () => {
    setShow(true);
  };
  const secondShow = () => {
    setSecond(false);
  };
  const handleJenre = (e) => {
    console.log(e);
    setUserJenre((prev) => [...prev, e.target.value]);
  };

  console.log(userJenre);

  return (
    <div>
      <button type="button" className="animated-button" onClick={handleOpen}>
        Выбрать фильм
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Пройти тест</h2>
            <div>
              {second ? (
                <div>
                  {show ? (
                    <Card className={classes.root}>
                      <CardContent>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          Вопрос
                        </Typography>
                        <Typography variant="body2" component="p">
                          <p>Жанр</p>
                          <br />
                          <RadioGroup
                            aria-label="Variant"
                            onChange={handleJenre}
                          >
                            {base?.genre?.map((item) => (
                              <FormGroup row>
                                <FormControlLabel
                                  onChange={handleJenre}
                                  value={item}
                                  control={
                                    <Checkbox
                                      icon={<FavoriteBorder />}
                                      checkedIcon={<Favorite />}
                                      name="checkedH"
                                    />
                                  }
                                  label={item}
                                />
                              </FormGroup>
                            ))}
                          </RadioGroup>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={secondShow}
                          className={classes.button}
                        >
                          Отправить ответ
                        </Button>
                      </CardActions>
                    </Card>
                  ) : (
                    <Card className={classes.root}>
                      <CardContent>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          Вопрос
                        </Typography>
                        <Typography variant="body2" component="p">
                          <p>Настроение</p>
                          <br />
                          <RadioGroup
                            aria-label="Variant"
                            name="mood"
                            onChange={handleChange}
                          >
                            {base?.mood?.map((item) => (
                              <FormGroup row>
                                <FormControlLabel
                                  value={item}
                                  control={<Radio />}
                                  label={item}
                                />
                              </FormGroup>
                            ))}
                          </RadioGroup>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={handleShow}
                          className={classes.button}
                        >
                          Отправить ответ
                        </Button>
                      </CardActions>
                    </Card>
                  )}
                </div>
              ) : (
                <div>
                  {" "}
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Вопрос
                      </Typography>
                      <Typography variant="body2" component="p">
                        <p> С кем?</p>
                        <br />
                        <RadioGroup
                          aria-label="Variant"
                          name="withWhom"
                          onChange={handleChange}
                        >
                          {base?.withWhom?.map((item) => (
                            <FormGroup row>
                              <FormControlLabel
                                value={item}
                                control={<Radio />}
                                label={item}
                              />
                            </FormGroup>
                          ))}
                        </RadioGroup>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to="/game" className="link">
                        <Button
                          size="small"
                          variant="contained"
                          // color="primary"
                          onClick={handleClose}
                          className={classes.button}
                        >
                          Отправить ответ
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
