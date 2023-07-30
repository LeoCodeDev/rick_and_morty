import { useDispatch } from "react-redux";
import React from "react";
import styles from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";

const NavBar = ({ onSearch, logout, setSelectedCharacter }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [aux, setAux] = React.useState(false);

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(orderCards(e.target.value));
  };

  const handlerClick = ()=> {
    setSelectedCharacter("")
  }

  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <div className={styles.buttonContainer}>
        <Link
          to="/home"
          onClick={() => {
            pathname === "/favorites" && dispatch(filterCards("all"));
          }}
        >
          <button className={styles.button28}>Home</button>
        </Link>
        <Link to="/about">
          <button className={styles.button28}>About</button>
        </Link>
        <Link to="/favorites">
          <button className={styles.button28} onClick={handlerClick}>Favorites</button>
        </Link>
        <button className={styles.button28} onClick={logout}>
          Logout
        </button>
      </div>
      {pathname === "/favorites" && (
        <div className={styles.listContainer}>
          <label htmlFor="order">
            Order by:
            <select
              name="order"
              onChange={handleOrder}
              className={`${styles.list} ${styles.order}`}
            >
              <option>Select</option>
              <option value="A">Ascending ID</option>
              <option value="D">Descending ID</option>
              <option value="ABC">Alphabetical A - Z</option>
              <option value="ZYX">Alphabetical Z - A</option>
            </select>
          </label>
          <label htmlFor="filter">
            Filter by:
            <select
              name="filter"
              onChange={handleFilter}
              className={`${styles.list} ${styles.filter}`}
            >
              <option value="all">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </label>
        </div>
      )}
    </nav>
  );
};

export { NavBar };
