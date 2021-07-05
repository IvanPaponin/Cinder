import { INIT_FILMS, DELETE_FILMS } from "../types";

const filmReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_FILMS: {
      return  payload ;
    }

    case DELETE_FILMS: {
      const deletedFilm = state.filter((el) => el.id !== payload);
      return deletedFilm;
    }
    default:
      return state
  }
}

export default filmReducer
