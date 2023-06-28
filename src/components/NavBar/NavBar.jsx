import React from "react";
import styles from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch, logout }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <div className={styles.buttonContainer}>
        <Link to="/home">
          <button className={styles.button28}>Home</button>
        </Link>
        <Link to="/about">
          <button className={styles.button28}>About</button>
        </Link>
        <Link to="/favorites">
          <button className={styles.button28}>Favorites</button>
        </Link>
        <button className={styles.button28} onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export { NavBar };
