import { INIT_FILMS } from "../types";

const filmReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case INIT_FILMS: {
      return { films: payload }
    }

    default:
      return state
  }
}

export default filmReducer
