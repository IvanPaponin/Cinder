import ric from "../../images/ric.jpeg";
import zak from "../../images/Zak.jpeg";
import quin from "../../images/quin.jpeg";
import chel from "../../images/chel.jpeg";
import "./Scroll.css";

export default function ScrollBarMain() {
  return (
    <div>
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider="center: true; clsActivated: uk-transition-active; autoplay: true; autoplay-interval: 3000"
        autoplay
      >
        <ul
          class="uk-slider-items uk-grid uk-grid-match "
          uk-height-viewport="offset-top: true; 
                            offset-bottom: 30
                            "
        >
          <li class="uk-width-3-4 uk-transition-toggle">
            <div class="uk-cover-container">
              <img src={ric} alt="" uk-cover />
              <div className="uk-position-center uk-panel">
                <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
                  Для просмотра с братом
                </div>
              </div>
            </div>
          </li>

          <li class="uk-width-3-4 uk-transition-toggle">
            <div class="uk-cover-container">
              <img src={zak} alt="" uk-cover />
              <div className="uk-position-center uk-panel">
                <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
                  Для просмотра с мамой
                </div>
              </div>
            </div>
          </li>

          <li class="uk-width-3-4 uk-transition-toggle">
            <div class="uk-cover-container">
              <img src={quin} alt="" uk-cover />
              <div className="uk-position-center uk-panel">
                <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
                  Для просмотра в компании
                </div>
              </div>
            </div>
          </li>
          <li class="uk-width-3-4 uk-transition-toggle">
            <div class="uk-cover-container">
              <img src={chel} alt="" uk-cover />
              <div className="uk-position-center uk-panel">
                <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
                  Для просмотра со своей половинкой
                </div>
              </div>
            </div>
          </li>
        </ul>
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
          uk-icon="icon: chevron-left; ratio: 3"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
          uk-icon="icon: chevron-right; ratio: 3"
        ></a>
      </div>
    </div>
  );
}
