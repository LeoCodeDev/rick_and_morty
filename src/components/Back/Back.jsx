import React from "react";
import styles from "./Back.module.css";
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";

const Back = ({ isColor }) => {
  const navigate = useNavigate();

  const back = () => {
    navigate("/home");
  };

  return (
    <div className={`${styles.container} ${styles[isColor]}`}>
      <button className={styles.iconButton} onClick={back}>
        <TbArrowBackUp />
      </button>
    </div>
  );
};

export { Back };
