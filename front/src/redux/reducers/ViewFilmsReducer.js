import { GET_VIEWFILMS_USER} from "../types";

const viewFilmReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_VIEWFILMS_USER: {
      return  payload ;
    }

   
    default:
      return state
  }
}

export default viewFilmReducer
