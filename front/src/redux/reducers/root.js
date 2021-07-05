import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import userReducer from "./userReducer";
import loaderReducer from './loaderReducer';
import SuperLikesFilmsReducer from './SuperLikesFilmsReducer';
import LikesFilmsReducer from './LikesFilmsReducer'
import viewFilmReducer from './ViewFilmsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  films: filmReducer,
   superLikes: SuperLikesFilmsReducer,
  likes: LikesFilmsReducer,
  views: viewFilmReducer,

})

export default rootReducer
