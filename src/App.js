import { Cards } from "./components/Cards/Cards.jsx";
import { LogoRAM } from "./components/Logo/LogoRAM";
import { InfoCharacter } from "./components/InfoCharacter/InfoCharacter";
import { NavBar } from "./components/NavBar/NavBar";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About.jsx";
import { Detail } from "./components/Detail/Detail.jsx";
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

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setCharacters((oldChars) => [data, ...oldChars]);
      }
    );
  }

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const selectCharacter = (id) => {
    setSelectedCharacter(characters.find((character) => character.id === Number(id)));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== Number(id)));
    setSelectedCharacter("");
  };

  return (
    <div className="App">
      {/* <CursorShip/> */}
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <LogoRAM />
              <Cards
                characters={characters}
                onClose={onClose}
                selectCharacter={selectCharacter}
                selectedCharacter={selectedCharacter}
              />
              {selectedCharacter && (
                <InfoCharacter selectedCharacter={selectedCharacter} />
              )}
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <LogoRAM />
              <Cards
                characters={characters}
                onClose={onClose}
                selectCharacter={selectCharacter}
                selectedCharacter={selectedCharacter}
              />
              {selectedCharacter && (
                <InfoCharacter selectedCharacter={selectedCharacter} />
              )}
            </>
          }
        />
        <Route path="/about" element={<About />} />

        <Route path={`/detail/:id`} element={<Detail selectedCharacter={selectedCharacter}/>} />
      </Routes>
    </div>
  );
}

export { App };
