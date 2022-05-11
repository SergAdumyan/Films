import React  from "react";
import { useSelector } from "react-redux";
export default function Top() {
  const film = useSelector(store=>store.film)
  console.log(film);
  
  return (
    <div style={{width:'90%',overflow:'hidden'}}>
     <img src={film.CoverImage} alt="" style={{width:'100%'}}/>
    </div>
  );
}
