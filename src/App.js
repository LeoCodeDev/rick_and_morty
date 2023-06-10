import "./App.css";
import { Cards } from "./components/Cards/Cards.jsx";
import { LogoRAM } from "./components/Logo/LogoRAM";
import { InfoCharacter } from "./components/InfoCharacter/InfoCharacter";
import { NavBar } from "./components/NavBar/NavBar";
import { useState } from "react";
import axios from "axios";
// import { CursorShip } from './components/cursorShip/CursorShip';

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    if (id === "") return;
    if (id > 826) {
      window.alert("¡Ese personaje no existe!");
      return;
    }

    const existingCharacter = characters.find(
      (character) => character.id === Number(id)
    );

    if (existingCharacter) return;

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const selectCharacter = (id) => {};

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App">
      {/* <CursorShip/> */}
      <NavBar onSearch={onSearch} />
      <LogoRAM />
      <Cards characters={characters} onClose={onClose} />
      <InfoCharacter />
    </div>
  );
}

export { App };
