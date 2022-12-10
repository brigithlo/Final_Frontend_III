import React, { useCallback, useContext, useState } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  

  const {theme,useFavDocs,setUseFavDocs} = useContext(ContextGlobal);
  const [favorite, setFavorite] = useState();
  const isFav = useMemo(()=> favorite,[favorite]);
   
  

  useMemo(()=>{
    if (useFavDocs.includes(id)) {
      setFavorite(true) ;
    }else{setFavorite(false);}
  },[useFavDocs])


  const addFav = useCallback(()=>{
    setFavorite(!favorite)
    let newFavorites = useFavDocs;
    let index = newFavorites.indexOf(id);
    if (isFav && index !== -1) {
      newFavorites.splice(index,1)
    }else{console.log("ahora lo es");
    newFavorites.push(id);
    setUseFavDocs(newFavorites);
  }
  localStorage.setItem("favoriteDoctors",JSON.stringify(newFavorites))
  })

  const buttonInfo = useMemo(()=>{
    if (favorite) {
      return "delete favorite"
    }else{return "add favorite"}
  })
  return (
    <div className="card" id={id} style={{backgroundColor: theme.cardColor}}>
      <Link to={`/dentist/${id}`} style={{color: theme.color}}>
      <img src="./images/doctor.jpg" className="docImage" alt="doctor"/>
      <p>{name}</p>
      <p>{username}</p>
      <p>{id}</p>
      </Link>
        {  }

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton"
      style={{background: theme.background, color: theme.color, borderTopStyle: 'groove'}}>{buttonInfo}</button>
    </div>
  );
};

export default Card;
