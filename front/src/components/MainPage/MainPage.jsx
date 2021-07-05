import "./MainPage.css";
import CardForMain from "../CardForMain/CardForMain";
import SvgIconsColor from "../FooterIcons/FooterIcons";
import SpringModal from "../Questionnaire/Questionnaire";
import ShareButton from "../ShareButton/ShareButton";
import LikedFilmsList from "../LikedFilmsList/LikedFilmsList";
import ButtonsForCard from "../ButtonsForCard/ButtonsForCard";
import { Link } from "react-router-dom";
import ScrollBarMain from "../SrollBar/ScrollBarMain";
import { useThemeContext } from "../../context/context";


export default function MainPage() {
  const { theme, setTheme, anotherThemeSet } = useThemeContext()

  return (
    <div>
      <div className="devider">
        <div className="textonMain">
          {" "}
          <h1>
            ФИЛЬМЫ НА ЛЮБОЙ ВКУС <br /> ДЛЯ ТЕБЯ И ТВОИХ БЛИЗКИХ{" "}
          </h1>
          <h4>There are two types of databases, boring ones and ours!</h4>
          <div className="buttonDiv">
            <SpringModal />
          </div>
          <h5 className={theme ? "h51" : "h52"}>
            Присоединяйтесь, чтобы выбирать фильмы, тратя на это меньше своего
            времени
          </h5>
        </div>


        <div className="wrapper">
          <div className="box box1" id="1">
            <ScrollBarMain />
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <SvgIconsColor />
      </footer>
    </div>
  );
}
