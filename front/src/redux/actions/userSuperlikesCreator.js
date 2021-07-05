import {UPDATE_SUPERLIKES_USER, GET_SUPERLIKES_USER, DELETE_SUPERLIKES_USER} from '../types' 
import axios from 'axios';

import {enableLoader, disableLoader} from './loader';
import {initViewedFilms} from './userViewedFilm'

axios.defaults.withCredentials = true;


export const deletedUserSuperLikedFilm = (film) =>({

  type: DELETE_SUPERLIKES_USER,
  payload: film
})




export const updateUserSuperLikesFilms = (newLikeFilm) =>({

  type: UPDATE_SUPERLIKES_USER,
  payload: newLikeFilm
})

export const initSuperLikedFilms = () => async (dispatch) => {
  
  dispatch(enableLoader())
  try {
    console.log('check');
  const response = await axios.get('http://localhost:8080/api/v1/user/superlikedFilm');
 console.log('response.data');
 dispatch({type: GET_SUPERLIKES_USER, payload:response.data})
  } catch (error) {
    console.log(error)
  }
  dispatch(disableLoader())

};

export const updateSuperLikedFilms = (newFilm) => async(dispatch) =>{
  try {
    const response = await axios.post('http://localhost:8080/api/v1/user/superlikedFilm', newFilm);
   
      dispatch(updateUserSuperLikesFilms(response.data))
      dispatch(initSuperLikedFilms());
    } catch (error) {
      console.log(error)
    }
    
  };

  export const deleteSuperLikedFilm = (film) => async(dispatch) =>{
    const response = await axios.post('http://localhost:8080/api/v1/user/view/superlike', film)
    dispatch(deletedUserSuperLikedFilm(response.data));

    dispatch(initViewedFilms());
  }

