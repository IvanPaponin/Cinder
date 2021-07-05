import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import TinderCard from "react-tinder-card";
import {
  initLikedFilms,
  updateLikedFilms,
} from "../../redux/actions/userLikesFilmCreator";
import {
  initSuperLikedFilms,
  updateSuperLikedFilms,
} from "../../redux/actions/userSuperlikesCreator";
import "./Card.css";
import Loader from "../Loader/Loader";
import Comments from "../Comments/Comments";
import ModalTraler from "../ModalTraler/ModalTraler";

const useStyles = makeStyles({
  border: {
    border: "1px solid #802bb1",
    color: "#802bb1;",
    marginTop: "2px",
    padding: "4px",
    width: "25vw",
    marginLeft: "2.5vw",
  },
});

export default function CardSolo({ id, setComments, commentsHandler }) {
  const classes = useStyles();
  const [films, setFilms] = useState([]);
  const loader = useSelector((state) => state.loader);
  const [infoAboutMovie, setInfoAboutMovie] = useState({});
  let allFilms = useSelector((state) => state.films);
  const [updateAllFilms, setUpgateAllFilms] = useState([]);
  const [trailerPreview, setTrailer] = useState(false);
  const [trailerLink, setTrailerLink] = useState(null);

  const dispatch = useDispatch();

  // const [comments, setComments] = useState(false);

  // const commentsHandler = () => {
  //   setComments(prev => !prev)
  // }
  const card = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/compilation")
      .then((res) => setFilms(res.data));
    // dispatch(initLikedFilms())
  }, []);
  // console.log(allFilms);
  const movieInfo = useCallback((id) => {
    fetch(
      `https://api.kinopoisk.cloud/movies/${id}/token/efcf5da3f88fef737921b0cd9182b8d6`
    )
      .then((res) => res.json())
      .then((data) => setInfoAboutMovie(data));
    //const currMovie = response.json()
    //return currMovie
  }, []);

  useEffect(() => {
    // 1143242
    movieInfo(id);
  }, [id]);

  function removeItemOnce(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const onSwipe = (direction) => {
    if (direction === "left") {
      let dislikeFilm = allFilms.find((film) => film.idKP == id);
      allFilms = removeItemOnce(allFilms, dislikeFilm);
      // console.log(allFilms);
      setComments(false);
    }

    if (direction === "right") {
      let currLikeFilm = allFilms.find((film) => film.idKP == id);
      allFilms = removeItemOnce(allFilms, currLikeFilm);
      console.log(currLikeFilm);
      dispatch(updateLikedFilms(currLikeFilm));
      setComments(false);
    }

    if (direction === "up") {
      let currSuperLikeFilm = allFilms.find((film) => film.idKP == id);
      allFilms = removeItemOnce(allFilms, currSuperLikeFilm);
      dispatch(updateSuperLikedFilms(currSuperLikeFilm));
      setComments(false);
    }
    if (direction === "down") {
    }
  };

  const trailerButtonClickHandler = () => {
    // setTrailer(!trailerPreview);
    console.log(id);
    fetch(
      `https://api.kinopoisk.cloud/movies/${id}/token/efcf5da3f88fef737921b0cd9182b8d6`
    )
      .then((res) => res.json())
      .then((data) => setTrailerLink(data.trailer));
    console.log(trailerLink);
  };

  // console.log(allFilms);

  return (
    <>
      {loader ? (
        <Loader />
      ) : allFilms.length === 0 ? (
        <h3>Фильмы закончились, вы слишком привередливые :)</h3>
      ) : (
        <TinderCard className="swipe" onSwipe={onSwipe}>
          <div className="card">
            <div className="dws-wrapper">
              <a>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="fucking card"
                    height="100%"
                    image={infoAboutMovie?.poster}
                    title="Contemplative Reptile"
                  />

                  <div className="dws-text">
                    <h2 gutterBottom variant="h5" component="h2">
                      {infoAboutMovie?.title}
                    </h2>
                    <hr />
                    <p variant="body2" component="p">
                      {infoAboutMovie?.description}
                    </p>
                    <div>
                      Рейтинг Кинопоиска:{" "}
                      <nobr className="numbers">
                        {infoAboutMovie?.rating_kinopoisk}
                      </nobr>
                      <br />
                      Рейтинг IMDB:{" "}
                      <nobr className="numbers">
                        {infoAboutMovie?.rating_imdb}
                      </nobr>
                    </div>
                  </div>
                </CardActionArea>
              </a>
            </div>

            <ModalTraler
              trailerButtonClickHandler={trailerButtonClickHandler}
              trailerLink={trailerLink}
            />

            <button
              size="small"
              align="rigth"
              className={classes.border}
              onClick={() => commentsHandler(id)}
            >
              Комментарии
            </button>
          </div>
        </TinderCard>
      )}
      {/* {comments ? <Comments/> : null} */}
    </>
  );
}
