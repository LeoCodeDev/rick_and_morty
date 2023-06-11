import React from "react";
import style from "./InfoCharacter.module.css";

const InfoCharacter = ({selectedCharacter}) => {
  const {
    name,
    status,
    species,
    gender,
    origin,
    image
  } = selectedCharacter
  return (
    <div className={style.container}>
      <h3>Character Info</h3>
      <ul className={style.list}>
        <li>
          <span className={style.option}>Name: </span>
          <span className={style.optionData}>{name}</span>
        </li>
        <li>
          <span className={style.option}>Status: </span>
          <span className={style.optionData}>{status}</span>
        </li>
        <li>
          <span className={style.option}>Species: </span>
          <span className={style.optionData}>{species}</span>
        </li>
        <li>
          <span className={style.option}>Gender: </span>
          <span className={style.optionData}>{gender}</span>
        </li>
        <li>
          <span className={style.option}>Planet: </span>
          <span className={style.optionData}>{origin?.name}</span>
        </li>
      </ul>
      <figure className={style.selectedCharacter}>
        <img src={image} alt={name} />
      </figure>
    </div>
  );
};

export { InfoCharacter };
