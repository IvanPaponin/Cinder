import { INIT_FILMS, DELETE_FILMS } from "../types";
import axios from 'axios';
import {enableLoader, disableLoader} from './loader';
axios.defaults.withCredentials = true;

export const deleteFilm = (films) => {
  return {
    type: DELETE_FILMS,
    payload: films
}
}

export const setAllUserFilms = (films) =>{
  return {
      type: INIT_FILMS,
      payload: films
  }
}
// thunk чтобы показывать юзеру подборку его фильмов после прохождения теста
export const initFilmsAC = (value) => async (dispatch) => {
  dispatch(enableLoader())
  try {
  const response = await axios.post('http://localhost:8080/api/v1/compilation', value);
   console.log(response.data);
    dispatch(setAllUserFilms(response.data))
  } catch (error) {
    console.log(error)
  }
  dispatch(disableLoader())
};
