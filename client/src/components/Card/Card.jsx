import React from "react";
import styleFav from "./CardFav.module.css";
import styleHome from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { InfoCharacter } from "../InfoCharacter/InfoCharacter";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    image,
    location,
    origin,
    episode,
    onClose,
    selectCharacter,
    selected,
  } = props;

  const { pathname } = useLocation();

  const style = pathname === "/favorites" ? styleFav : styleHome;

  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites);

  const isFav = myFavorites.some((fav) => fav.id === id);

  const handleFavorite = () => {
    if (!isFav) {
      dispatch(
        addFav({
          id,
          name,
          status,
          species,
          type,
          gender,
          image,
          location,
          origin,
          episode,
        })
      );
    } else if (isFav) {
      dispatch(removeFav(id));
    }
  };

  const handleOnClose = (id) => {
    onClose(id);
    dispatch(removeFav(id));
  };

  return (
    <article key={id} className={style.card}>
      <button onClick={() => handleOnClose(id)} className={style.close}>
        X
      </button>
      <figure
        onClick={() => selectCharacter(id)}
        className={
          selected
            ? `${style.imgContainer} ${style.selected}`
            : style.imgContainer
        }
      >
        <img src={image} alt={name} />
      </figure>
      <button
        className={`${style.heart} ${isFav && style.isFav}`}
        onClick={handleFavorite}
      >
        {isFav ? "❤️" : "🤍"}
      </button>
      {pathname === "/favorites" && (
        <InfoCharacter key={id} selectedCharacter={props} />
      )}
    </article>
  );
}

export { Card };
