import quin from "../../images/quin.jpeg";
import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";

export default function ScrollBarViewed() {

  const [infoAboutFilm, setInfoAboutFilm] = useState({});
  const [infoAboutFilm2, setInfoAboutFilm2] = useState({});
  // const [comments, setComments] = useState(false);

  const movieInfo = () => {
    fetch(
      `https://api.kinopoisk.cloud/movies/1108577/token/de2e011c57a2199d24402bc642e73394`
    )
      .then((res) => res.json())
      .then((data) => setInfoAboutFilm(data));
  }
 
  useEffect(() => {
  movieInfo()
 }, [])

 const movieInfo2 = () => {
  fetch(
    `https://api.kinopoisk.cloud/movies/558/token/de2e011c57a2199d24402bc642e73394`
  )
    .then((res) => res.json())
    .then((data) => setInfoAboutFilm2(data));
}

useEffect(() => {
movieInfo2()
}, [])

// const commentsHandler = (id) => {
//   // selectFilm(e);
//   setIdFilm(id)
//   setComments(prev => !prev)
// }

  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="sets: false"
    >
      <ul className="uk-slider-items uk-child-width-1-4@m uk-light uk-grid-small">
        <li className="uk-transition-toggle" tabindex="0">
          <img src={infoAboutFilm.poster} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
            {infoAboutFilm.rating_kinopoisk}
              </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={infoAboutFilm2.poster} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
            {infoAboutFilm2.rating_kinopoisk}
              </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={quin} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
      </ul>
      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
        uk-icon="icon: chevron-left; ratio: 3"
      ></a>
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
        uk-icon="icon: chevron-right; ratio: 3"
      ></a>
      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
      {/* {comments ? <Comments /> : null} */}
    </div>
  );
}
