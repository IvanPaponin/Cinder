import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import "./Scroll.css";
import { deleteLikedFilm } from "../../redux/actions/userLikesFilmCreator";
import axios from "axios";
import { initSuperLikedFilms } from "../../redux/actions/userSuperlikesCreator";
import ShareButton from '../ShareButton/ShareButton';
axios.defaults.withCredentials= true;



export default function Element({ id, commentsHandler }) {
  const [infoAboutFilm, setInfoAboutFilm] = useState({});
  let likes = useSelector((state) => state.likes);
  const dispatch = useDispatch();

  console.log(id);

  const movieInfo = (id) => {
    fetch(
      `https://api.kinopoisk.cloud/movies/${id}/token/efcf5da3f88fef737921b0cd9182b8d6`
    )
      .then((res) => res.json())
      .then((data) => setInfoAboutFilm(data));
  };

  useEffect(() => {
    movieInfo(id);
  }, []);
  console.log("--->", infoAboutFilm);

  const changerState = () => {
    let like = likes.find((film) =>
      film.movie.find((movies) => id == movies.idKP)
    );
    dispatch(deleteLikedFilm(like));

  };

  return (
    <li className="uk-transition-toggle" tabindex="0">
      <img src={infoAboutFilm.poster} alt="" />
      <div className="uk-position-center uk-panel">
        <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
          <p>
            <p className="ratingColor">{infoAboutFilm.rating_kinopoisk}</p>

            <button className="butOfScroll" onClick={changerState}>
              {" "}
              Добавить в буду смотреть{" "}
            </button>

            <button onClick={() => commentsHandler(id)} className="butOfScroll"> Комментарии </button>
            <ShareButton id={id} />
          </p>
        </div>
      </div>
    </li>
  );
}
