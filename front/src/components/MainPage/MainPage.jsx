import "./MainPage.css";
import CardForMain from "../CardForMain/CardForMain";
import SvgIconsColor from "../FooterIcons/FooterIcons";
import SpringModal from "../Questionnaire/Questionnaire";
import ShareButton from "../ShareButton/ShareButton";
import LikedFilmsList from "../LikedFilmsList/LikedFilmsList";
import ButtonsForCard from "../ButtonsForCard/ButtonsForCard";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <div className="wrapper">
        <div className="box box1" id="1">
          <CardForMain />
          <span>Для просмотра с половинкой</span>
        </div>
        <div className="box box2" id="2">
          <CardForMain />
          <span>Для просмотра с мамой</span>
        </div>
        <div className="box box3" id="3">
          <CardForMain />
          <span>Для просмотра с семьей</span>
        </div>
      </div>
      <div className="buttonDiv">
        <SpringModal />
      </div>
      <hr />
      <ShareButton />
      <footer>
        <SvgIconsColor />
      </footer>
    </div>
  );
}
