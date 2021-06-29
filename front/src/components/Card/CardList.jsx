import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initFilmsAC } from "../../redux/actions/actionCreator"

function CardsList() { 

  

  const dispatch = useDispatch()
  const userFilms = useSelector(state => state.userfilms)


  // useEffect(() => {
  //   dispatch(initFilmsAC(films))
  // }, [dispatch])


  let films = useSelector(state => state.films)
  console.log(films);



  return (
    <div><h3>Подборка для юзера:</h3> {userFilms.map(film => <Card />)}</div>

  )
}

export default CardsList
