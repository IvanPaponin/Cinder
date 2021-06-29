import { DELETE_USER, SET_USER, UPDATE_USER } from "../types";
import {enableLoader, disableLoader} from './loader';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

// export const updateUser = (user) =>({
//   type: UPDATE_USER,
//   payload: user
// })

// export const updateUser =(payload, history) => async(dispatch) => {
//   response = awai
// }

export const signUp = (payload, history) => async (dispatch) => {
  dispatch(enableLoader())
  const response = await fetch('http://localhost:8080/api/v1/auth/signup', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.status === 400) {
    alert('Вы уже зарегистрированы, войдите')
  }
    if (response.status === 200) {
      const user = await response.json()
      if (user) {
        dispatch(setUser(user))
        history.replace('/test');
      }
    } else {
      history.replace('/register');
    }
    dispatch(disableLoader())
}

export const signIn = (payload, history, from) => async (dispatch) => {
  dispatch(enableLoader())
  const response = await fetch('http://localhost:8080/api/v1/auth/signin', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
    history.replace(from);
    // history.push('/');
  } if (response.status === 401 || response.status === 401) {
    alert('Неверно введены данные, попробуйте снова')
  } 
  // else {
  //   history.replace('/signin')
  // }
  dispatch(disableLoader())
}

export const signOut = () => async (dispatch) => {
  const response = await fetch('http://localhost:8080/api/v1/auth/signout', {
    credentials: 'include'
  })
  if (response.ok) {
    dispatch(deleteUser())
  }
}

export const deleteUser = () => ({
  type: DELETE_USER
})

export const getUserFromServer = (id) => async (dispatch) => {
  dispatch(enableLoader())
  const response = await fetch('http://localhost:8080/api/v1/auth/user', {credentials: 'include'})
  if (response.status === 200) {
    const currentUser = await response.json()
    dispatch(setUser(currentUser))
  }
  dispatch(disableLoader())
} 
