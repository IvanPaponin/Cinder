import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initFilmsAC } from "../../redux/actions/actionCreator"
import Card from './Card'


function CardsList() {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(initFilmsAC(films))
  }, [dispatch])

  const films = useSelector(state => state.films)

  return (
    <div><h3>Подборка для юзера:</h3> {films.map(film => <Card />)}</div>
  )
}

export default CardsList
