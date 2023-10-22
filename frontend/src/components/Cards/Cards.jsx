import { useLocation } from "react-router-dom";
import { Card } from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

function Cards(props) {
  const {
    characters,
    onClose,
    selectCharacter,
    selectedCharacter,
    setSelectedCharacter,
  } = props;

  const { pathname } = useLocation();

  let containerClass = style.container;

  if (pathname === "/favorites") {
    containerClass = style.containerFavorites;
  }

  const favoritesCharacters = useSelector((state) => state.myFavorites);

  const charactersToRender =
    pathname === "/favorites" ? favoritesCharacters : characters;

  return (
    <section className={containerClass}>
      {charactersToRender.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            type={char.type}
            gender={char.gender}
            image={char.image}
            location={char.location}
            origin={char.origin}
            episode={char.episode}
            onClose={onClose}
            selectCharacter={selectCharacter}
            setSelectedCharacter={setSelectedCharacter}
            selected={char.id === selectedCharacter?.id}
          />
        );
      })}
    </section>
  );
}

export { Cards };
