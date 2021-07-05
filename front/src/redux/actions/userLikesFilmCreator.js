import {UPDATE_LIKES_USER, GET_LIKES_USER,DELETE_LIKES_USER} from '../types' 
import axios from 'axios';
import {enableLoader, disableLoader} from './loader';
import {initSuperLikedFilms} from './userSuperlikesCreator'

axios.defaults.withCredentials = true;



export const deletedUserLikedFilm = (film) =>({

  type: DELETE_LIKES_USER,
  payload: film
})




export const updateUserLikesFilms = (newLikeFilm) =>({

  type: UPDATE_LIKES_USER,
  payload: newLikeFilm
})

export const initLikedFilms = () => async (dispatch) => {
  dispatch(enableLoader())
  try {
  const response = await axios.get('http://localhost:8080/api/v1/user/likedFilm');
 console.log('response.data');
 dispatch({type: GET_LIKES_USER, payload:response.data})
  } catch (error) {
    console.log(error)
  }
  dispatch(disableLoader())
};

export const updateLikedFilms = (newFilm) => async(dispatch) =>{
  console.log(newFilm);
  console.log('blablabla');
  try {
    const response = await axios.post('http://localhost:8080/api/v1/user/likedFilm', newFilm);
   
      dispatch(updateUserLikesFilms(response.data))
      dispatch(initLikedFilms())
    } catch (error) {
      console.log(error)
    }
    
  };



  export const deleteLikedFilm = (film) => async(dispatch) =>{
    const response = await axios.post('http://localhost:8080/api/v1/user/view/like', film)
    dispatch(deletedUserLikedFilm(response.data));

    dispatch(initSuperLikedFilms());
  }
