import Zak from "../../images/Zak.jpeg";
import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import LiForFirstScroll from './LiForFirstScroll';

export default function ScrollBar({id}) {

  const [infoAboutFilm, setInfoAboutFilm] = useState({});
  const superLikes = useSelector(state=> state.superLikes);


 

  return (
  
      
       
     <LiForFirstScroll/>

        
     
    
  );
}
