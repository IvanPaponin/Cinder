import Zak from "../../images/Zak.jpeg";
import React, { useEffect, useState } from "react";

export default function ScrollBar() {

  const [infoAboutFilm, setInfoAboutFilm] = useState({});
  const [infoAboutFilm2, setInfoAboutFilm2] = useState({});

  const movieInfo = () => {
    fetch(
      `https://api.kinopoisk.cloud/movies/1108577/token/efcf5da3f88fef737921b0cd9182b8d6`
    )
      .then((res) => res.json())
      .then((data) => setInfoAboutFilm(data));
  }
 
  useEffect(() => {
  movieInfo()
 }, [])

 const movieInfo2 = () => {
  fetch(
    `https://api.kinopoisk.cloud/movies/558/token/efcf5da3f88fef737921b0cd9182b8d6`
  )
    .then((res) => res.json())
    .then((data) => setInfoAboutFilm2(data));
}

useEffect(() => {
movieInfo2()
}, [])

 

  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="sets: false"
    >
      <ul className="uk-slider-items  uk-child-width-1-4@m ">
        <li className="uk-transition-toggle" tabindex="0">
          <img src={infoAboutFilm.poster} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
            <p>Рейтинг <br/>
            {infoAboutFilm.rating_kinopoisk}
              </p>
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
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
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
    </div>
  );
}
