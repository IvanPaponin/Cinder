import { INIT_FILMS } from "../types";

// thunk чтобы показывать юзеру подборку его фильмов после прохождения теста
export const initFilmsAC = () => async (dispatch, getState) => {
  try {
    const response = await fetch('http://localhost:8080/api/choice')
    const payload = await response.json()
    dispatch({ type: INIT_FILMS, payload })
  } catch (error) {
    console.log(error)
  }
};
