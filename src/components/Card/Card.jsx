import React from "react";
import style from "./Card.module.css";

function Card(props) {
  const { 
    id,
    name,
    image,
    onClose,
    selectCharacter
  } = props;
  return (
    <article key={id} className={style.card}>
      <button onClick={() => onClose(id)} className={style.close}>
        X
      </button>
      <figure onClick={() => selectCharacter(id)} className={`${style.imgContainer} ${style.hover}`}>
        <img src={image} alt={name} />
      </figure>
      <h2 className={style.name}>{name.split(" ")[0]}</h2>
    </article>
  );
}

export { Card };
