import { Cards } from "./components/Cards/Cards.jsx";
import { LogoRAM } from "./components/Logo/LogoRAM.jsx";
import { InfoCharacter } from "./components/InfoCharacter/InfoCharacter.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import { About } from "./components/About/About.jsx";
import { Detail } from "./components/Detail/Detail.jsx";
import { Form } from "./components/Form/Form.jsx";
import { CursorShip } from "./components/cursorShip/CursorShip";

function App() {
  const [characters, setCharacters] = useState([]);

  async function onSearch(id) {
    try {
      if (id === "") return;
      if (id > 826) {
        window.alert("¡Ese personaje no existe!");
        return;
      }

      const existingCharacter = characters.find(
        (character) => character.id === Number(id)
      );

      if (existingCharacter) return;

      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      setCharacters((oldChars) => [data, ...oldChars]);
    } catch (error) {
      console.log({ error });
    }
  }

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const selectCharacter = (id) => {
    if (selectedCharacter && selectedCharacter.id === Number(id))
      return setSelectedCharacter("");
    setSelectedCharacter(
      characters.find((character) => character.id === Number(id))
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
    setSelectedCharacter("");
  };

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = `http://localhost:3001/rickandmorty/login/`;
      const { data } = await axios(
        `${URL}?email=${email}&password=${password}`
      );

      if (data.access) {
        setAccess(true);
        navigate("/home");
      } else {
        setWrongPass(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      <CursorShip />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form
                login={login}
                wrongPass={wrongPass}
                setWrongPass={setWrongPass}
              />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <NavBar
                onSearch={onSearch}
                logout={logout}
                setSelectedCharacter={setSelectedCharacter}
              />
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

        <Route
          path={`/detail/:id`}
          element={<Detail selectedCharacter={selectedCharacter} />}
        />

        <Route
          path="/favorites"
          element={
            <>
              <NavBar onSearch={onSearch} logout={logout} />
              <Cards
                characters={characters}
                onClose={onClose}
                selectCharacter={selectCharacter}
                selectedCharacter={selectedCharacter}
                setSelectedCharacter={setSelectedCharacter}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export { App };
