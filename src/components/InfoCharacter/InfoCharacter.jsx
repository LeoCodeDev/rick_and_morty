import React from "react";
import style from "./InfoCharacter.module.css";
import { Link } from "react-router-dom";

const InfoCharacter = ({selectedCharacter}) => {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
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
      <Link to={`/detail/${id}`}>
      <button className={style.mInfo}>More Info...</button>
      </Link>
    </div>
  );
};

export { InfoCharacter };
