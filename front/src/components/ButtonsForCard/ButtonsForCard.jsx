import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardSolo from "../Card/Card";
import "./ButtonsForCard.css";
import SvgIconsColor from "../FooterIcons/FooterIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    background: `url(${"/front/src/images/22222.jpeg"})`,
    backgroundColor: "hotpink",
  },
}));

function ButtonsForCard() {
  const classes = useStyles();

  // const allFilms = useSelector(state => state.films)

  // const [likeEvent, setLikeEvent] = useState('')
  // const [dislikeEvent, setDislikeEvent] = useState('')
  // const [dontKnowEvent, setKnowEvent] = useState('')
  // const [superLikeEvent, setsuperLike] = useState('')

  // const dislikeHandler = (id) => {

  // }

  // const dontKnowHandler = (id) => {

  // }

  // const likeHandler = (id) => {

  // }

  // const superLikeHandler = (id) => {

  // }

  return (
    <>
      <div>
        <div className="divWithButtons">
          <div className="divBut">
            <img
              className="swing"
              src="https://img.icons8.com/ios/100/000000/thumbs-down.png"
            />
            <img
              className="swing"
              src="https://img.icons8.com/ios/100/000000/question-mark--v1.png"
            />
          </div>

          <div className="boxGame">
            <CardSolo />
          </div>

          <div className="divBut">
            <img
              className="swing"
              src="https://img.icons8.com/ios/100/000000/thumb-up--v1.png"
            />
            <img
              className="swing"
              src="https://img.icons8.com/windows/100/000000/filled-heart.png"
            />
          </div>
        </div>
        <hr />
        <footer>
          <SvgIconsColor />
          <div>
            <a href="https://icons8.com/icon/aId5rVASLwDE/сердечко-с-заливкой">
              icon by Icons8
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default ButtonsForCard;
