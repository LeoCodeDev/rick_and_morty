import React from "react";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { AiTwotoneHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function Card(props) {
  const {
    id,
    name,
    image,
    onClose,
    selectCharacter,
    selected,
  } = props;

  const dispatch = useDispatch();

  const myFavorites = useSelector(state => state.myFavorites)

  const isFav = myFavorites.some(fav => fav.id === id)

  const handleFavorite = () => {
    if (!isFav) {
      dispatch(addFav(props));
    } else if (isFav) {
      dispatch(removeFav(id));
    }
  };

  return (
    <article key={id} className={style.card}>
      <button onClick={() => onClose(id)} className={style.close}>
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
      <button className={style.heart} onClick={handleFavorite}>
        <AiTwotoneHeart fill={isFav ? "red" : "white"}/>
      </button>
    </article>
  );
}

export { Card };
