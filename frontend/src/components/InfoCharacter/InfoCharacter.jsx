import React from "react";
import styleFav from "./InfoCharacterFav.module.css";
import styleHome from "./InfoCharacter.module.css";
import { Link, useLocation } from "react-router-dom";

const InfoCharacter = ({ selectedCharacter }) => {
  const { id, name, status, species, gender, origin, selectCharacter } =
    selectedCharacter;
  const { pathname } = useLocation();

  const style = pathname === "/favorites" ? styleFav : styleHome;

  const handleClick = () => {
    if (pathname !== "/favorites") return
    selectCharacter(id);
  };

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
          <span className={style.optionData}>{origin || "???"}</span>
        </li>
      </ul>
      <Link to={`/detail/${id}`}>
        <button className={style.mInfo} onClick={handleClick}>
          More Info...
        </button>
      </Link>
    </div>
  );
};

export { InfoCharacter };
