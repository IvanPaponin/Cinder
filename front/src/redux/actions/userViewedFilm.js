import {GET_VIEWFILMS_USER} from '../types'

import {enableLoader, disableLoader} from './loader';
import axios from 'axios';
axios.defaults.withCredentials = true;


export const initViewedFilms = () => async (dispatch) => {
  dispatch(enableLoader())
  try {
  const response = await axios.get('http://localhost:8080/api/v1/user/view');

 dispatch({type: GET_VIEWFILMS_USER, payload:response.data})
  } catch (error) {
    console.log(error)
  }
  dispatch(disableLoader())

};
