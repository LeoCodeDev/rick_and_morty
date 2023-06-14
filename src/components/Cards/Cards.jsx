import {Card} from "../Card/Card";
import style from "./Cards.module.css";

function Cards(props) {
  const { characters, onClose, selectCharacter, selectedCharacter} = props;

  let containerClass = style.container;

  if (characters.length === 1) {
    containerClass += ` ${style.centered}`;
  }

  return (
    <section className={containerClass}>
      {characters.map(
        ({
          id,
          name,
          image,
        }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              onClose={onClose}
              selectCharacter={selectCharacter}
              selected={id === selectedCharacter?.id}
            />
          );
        }
      )}
    </section>
  );
}

export {Cards}
