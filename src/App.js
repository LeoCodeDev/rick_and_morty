import { Cards } from "./components/Cards/Cards.jsx";
import { LogoRAM } from "./components/Logo/LogoRAM";
import { InfoCharacter } from "./components/InfoCharacter/InfoCharacter";
import { NavBar } from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import { About } from "./components/About/About.jsx";
import { Detail } from "./components/Detail/Detail.jsx";
import { Form } from "./components/Form/Form.jsx";
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
        setCharacters((oldChars) => [data, ...oldChars]);
      }
    );
  }

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const selectCharacter = (id) => {
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
  const [wrongPass, setWrongPass] = useState(false)

  const credentials = {
    email: "leocodedev@gmail.com",
    password: "123Sal$.",
  };

  const login = (userData) => {
    if (
      credentials.email === userData.email &&
      credentials.password === userData.password
    ) {
      setAccess(true);
      navigate("/home");
    }else{
      setWrongPass(true)
    }
  };

  const logout = () => {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {/* <CursorShip/> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form login={login} wrongPass={wrongPass}/>
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <NavBar onSearch={onSearch} logout={logout}/>
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
              {/* <button>  </button> */}
            </>
          }
        />
        <Route path="/about" element={<About />} />

        <Route
          path={`/detail/:id`}
          element={<Detail selectedCharacter={selectedCharacter} />}
        />
      </Routes>
    </div>
  );
}

export { App };
