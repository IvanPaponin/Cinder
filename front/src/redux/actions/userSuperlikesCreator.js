import {UPDATE_SUPERLIKES_USER, GET_SUPERLIKES_USER} from '../types' 
import axios from 'axios';

import {enableLoader, disableLoader} from './loader';

axios.defaults.withCredentials = true;







export const updateUserSuperLikesFilms = (newLikeFilm) =>({

  type: UPDATE_SUPERLIKES_USER,
  payload: newLikeFilm
})

export const initSuperLikedFilms = () => async (dispatch) => {
 
  try {
  const response = await axios.get('http://localhost:8080/api/v1/user/superlikedFilm');
 console.log('response.data');
 dispatch({type: GET_SUPERLIKES_USER, payload:response.data})
  } catch (error) {
    console.log(error)
  }

};

export const updateSuperLikedFilms = (newFilm) => async(dispatch) =>{
  try {
    const response = await axios.post('http://localhost:8080/api/v1/user/superlikedFilm', newFilm);
   
      dispatch(updateUserSuperLikesFilms(response.data))
    } catch (error) {
      console.log(error)
    }
    
  };
