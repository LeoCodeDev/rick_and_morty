import React from "react";
import style from "./InfoCharacter.module.css";
import rick from "../../assets/rickSanchez.png";



const InfoCharacter = () => {
  return (
    <div className={style.container}>
      <h3>Character Info</h3>
      <ul className={style.list}>
        <li>
          <span className={style.option}>Name: </span>
          <span className={style.optionData}>Rick</span>
        </li>
        <li>
          <span className={style.option}>Status: </span>
          <span className={style.optionData}>Alive</span>
        </li>
        <li>
          <span className={style.option}>Species: </span>
          <span className={style.optionData}>Human</span>
        </li>
        <li>
          <span className={style.option}>Gender: </span>
          <span className={style.optionData}>Male</span>
        </li>
        <li>
          <span className={style.option}>Planet: </span>
          <span className={style.optionData}>Earth C132</span>
        </li>
      </ul>
      <figure className={style.selectedCharacter}>
        <img src={rick} alt="rick" />
      </figure>
    </div>
  );
};

export { InfoCharacter };
