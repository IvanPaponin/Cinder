import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LiForFirstScroll from "../SrollBar/LiForFirstScroll";
import LiForSuperLikes from "../SrollBar/LiForSuperlikes";
import ScrollBarViewed from "../SrollBar/ScrollBarViewed";
import ViewedLi from "../SrollBar/ViewedLi";
import { useSelector, useDispatch } from "react-redux";
import { initLikedFilms } from "../../redux/actions/userLikesFilmCreator";
import { initSuperLikedFilms } from "../../redux/actions/userSuperlikesCreator";
import { useEffect } from "react";
import Comments from "../Comments/Comments";
import "./LikedFilmsList.css";
import { initViewedFilms } from "../../redux/actions/userViewedFilm";
import { useThemeContext } from "../../context/context";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "75vw",
    height: "100vh"
  },
  bar: {
    backgroundColor: "#802bb1",
  },
}));

export default function LikedFilmsList() {
  const classes = useStyles();
  const [comments, setComments] = React.useState(false);
  const [initValue, setInitValue] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [idFilm, setIdFilm] = React.useState();
  const dispatch = useDispatch();

  useEffect(()=>{
    initLikedFilms();
    initSuperLikedFilms();
    initViewedFilms();

  },[])
  

  // },[])

  const likes = useSelector((state) => state.likes);
  const superLikes = useSelector((state) => state.superLikes);
  const views = useSelector((state) => state.views);

  const commentsHandler = (id) => {
    // selectFilm(e);
    setIdFilm(id);
    setComments((prev) => !prev);
  };

  console.log(likes);

  const handleChange = (event, newValue) => {
    setInitValue(true);
    setValue(newValue);
    setComments(false);
  };
  const {theme, setTheme, anotherThemeSet} = useThemeContext()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={theme ? "bar" : "bar2"}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Буду смотреть" />
          <LinkTab label="Решу потом" />
          <LinkTab label="Просмотренное" />
        </Tabs>
      </AppBar>
      {initValue ? (
        <>
          <TabPanel value={value} index={0}>
            <div
              className="uk-position-relative uk-visible-toggle uk-light"
              tabindex="-1"
              uk-slider="sets: false"
            >
              <ul className="uk-slider-items  uk-child-width-1-4@m uk-grid-small ">
                {superLikes?.map((film) =>
                  film?.movie?.map((movie) => (
                    <LiForSuperLikes
                      commentsHandler={commentsHandler}
                      id={movie.idKP}
                      key={movie._id}
                    />
                  ))
                )}
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
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div
              className="uk-position-relative uk-visible-toggle uk-light"
              tabindex="-1"
              uk-slider="sets: false"
            >
              <ul className="uk-slider-items  uk-child-width-1-4@m uk-grid-small ">
                {likes?.map((film) =>
                  film?.movie?.map((movie) => (
                    <LiForFirstScroll
                      commentsHandler={commentsHandler}
                      id={movie.idKP}
                      key={movie._id}
                    />
                  ))
                )}
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
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div
              className="uk-position-relative uk-visible-toggle uk-light"
              tabindex="-1"
              uk-slider="sets: false"
            >
              <ul className="uk-slider-items  uk-child-width-1-4@m uk-grid-small ">
                {views?.map((film) =>
                  film?.movie?.map((movie) => (
                    <ViewedLi
                      commentsHandler={commentsHandler}
                      id={movie.idKP}
                      key={movie._id}
                    />
                  ))
                )}
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
          </TabPanel>
          {comments ? <Comments id={idFilm} /> : null}
        </>
      ) : null}
    </div>
  );
}
