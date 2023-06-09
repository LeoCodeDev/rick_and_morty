import React from "react";
import style from "./SearchBar.module.css";

function SearchBar(props) {
  const { onSearch } = props;
  return (
    <section className={style.container}>
      <label htmlFor="searchBar" className={style.searchBarLabel}>Buscar</label>
      <input
        id="searchBar"
        className={style.searchBar}
        type="search"
        placeholder="Personaje"
      />
      <button className={style.button} onClick={onSearch}>
        🔍︎
      </button>
    </section>
  );
}

export { SearchBar };
