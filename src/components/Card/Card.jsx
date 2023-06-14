import React from "react";
import style from "./Card.module.css";

function Card(props) {
  const { 
    id,
    name,
    image,
    onClose,
    selectCharacter,
    selected
  } = props;
  return (
    <article key={id} className={style.card}>
      <button onClick={() => onClose(id)} className={style.close}>
        X
      </button>
      <figure onClick={() => selectCharacter(id)} className={selected ? `${style.imgContainer} ${style.selected}` : style.imgContainer}>
        <img src={image} alt={name} />
      </figure>
    </article>
  );
}

export { Card };
