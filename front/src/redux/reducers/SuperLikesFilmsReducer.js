import {UPDATE_SUPERLIKES_USER, GET_SUPERLIKES_USER, DELETE_SUPERLIKES_USER} from '../types';


export default function SuperLikesFilmsReducer(state =[], action){
  const {type, payload} = action;

  switch (type) {
    case GET_SUPERLIKES_USER: {
      return payload 
    }
    
    case UPDATE_SUPERLIKES_USER:
      return [...state, payload]

      case DELETE_SUPERLIKES_USER:
       return state.filter((el)=> el._id !== payload._id);
    
  
    default:
      return state;
      
  }

}
