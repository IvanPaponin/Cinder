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
import { Link, useHistory } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import { useState, useEffect } from "react";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { initFilmsAC } from "../../redux/actions/filmsCreator";
// import "./Qestionnare.css";
axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    backgroundColor: "#564f6f",
    color: "white",
    border: "1px solid #802bb1",
  },

  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontSize: "25px !important",
    color: "white",
    textAlign: "center",
  },

  box: {
    width: "60vw",
    height: "60vh",
  },
  icon: {
    fontSize: "45px !important",
  },
  pos: {
    marginBottom: 2,
  },
  button: {
    margin: "0 auto",
    backgroundColor: "#564f6f",
    textDecoration: "none",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  border: {
    border: "1px solid #802bb1",
    color: "#802bb1;",
    marginTop: "2px",
    padding: "4px",
    width: "25vw",
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

export default function SpringModal({
  trailerButtonClickHandler,
  trailerLink,
}) {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    jenre: "",
    withWhom: "",
    mood: "",
  });
  const [show, setShow] = useState(false);
  const [second, setSecond] = useState(true);
  const [base, setBase] = useState({});

  const dispatch = useDispatch();
  // console.log(base);
  // console.log(value);
  // console.log(base.genre);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/test")
      .then((res) => setBase(res.data));
  }, []);

  const handleOpen = () => {
    trailerButtonClickHandler();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShow(false);
    setSecond(true);
  };

  const secondShow = () => {
    setSecond(false);
  };

  return (
    <div>
      <button className={classes.border} type="button" onClick={handleOpen}>
        ТРЕЙЛЕР
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
        <div>
          <Card className={classes.root}>
            <CardContent>
              {/* <Typography className={classes.title} gutterBottom>
                Ваше настроение?
              </Typography> */}
              <Typography variant="body2" component="p">
                <iframe
                  width="560"
                  height="315"
                  src={trailerLink}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className={classes.box}
                ></iframe>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                onClick={handleClose}
                className={classes.button}
              >
                Скрыть
              </Button>
            </CardActions>
          </Card>
        </div>
      </Modal>
    </div>
  );
}
