import quin from "../../images/quin.jpeg";
import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import LiForSuperLikes from './LiForSuperlikes'

export default function ScrollBar2({id}) {

  const [infoAboutSuperFilm, setInfoAboutSuperFilm] = useState({});
  

  const movieInfo = (id) => {
    fetch(
      `https://api.kinopoisk.cloud/movies/${id}/token/efcf5da3f88fef737921b0cd9182b8d6`
    )
      .then((res) => res.json())
      .then((data) => setInfoAboutSuperFilm(data));
  }
 
  useEffect(() => {
  movieInfo(id)
 }, [])




  return (


    <LiForSuperLikes/>
  );
}
