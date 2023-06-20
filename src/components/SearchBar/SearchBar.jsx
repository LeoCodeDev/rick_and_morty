import React from "react";
import style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [id, setId] = React.useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.container}>
      <label htmlFor="searchBar" className={style.searchBarLabel}>
        Search
      </label>
      <input
        id="searchBar"
        className={style.searchBar}
        type="search"
        placeholder="Insert Character ID (1~826)"
        onChange={handleChange}
      />
      <button className={style.button} onClick={() => onSearch(id)}>
        🔍︎
      </button>
      <button
        className={style.button}
        onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}
      >
        🎲
      </button>
    </div>
  );
}

export { SearchBar };
