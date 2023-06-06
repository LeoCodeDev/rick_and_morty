import React from "react";
import style from "./Card.module.css";

function Card(props) {
  const { 
      id,
      name, 
      status, 
      species, 
      gender, 
      planet, 
      image, 
      onClose } = props;
  return (
    <article key={id} className={style.card}>
      <button onClick={onClose}>X</button>
      <figure className={style.imgContainer}>
        <img src={image} alt={name} />
      </figure>
      <div className={style.infoContainer}>
        <h2 className={style.name}>{name}</h2>
        <ul className={style.infoList}>
          <li>{status}</li>
          <li>{species}</li>
          <li>{gender}</li>
          <li>{planet}</li>
        </ul>
      </div>
    </article>
  );
}

export { Card };
