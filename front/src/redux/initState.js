const initState = {
  user: null,
  loader: false,
  films: [],
  superLikes:[],
  likes: [],
}

// const getInitState = () => {
//   const stateFromLS = JSON.parse(window.localStorage.getItem('redux'))
//   return stateFromLS ? stateFromLS : initState

// }

// export default getInitState
export default initState;
