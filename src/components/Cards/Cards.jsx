import {Card} from "../Card/Card";
import style from "./Cards.module.css";

function Cards(props) {
  const { characters } = props;
  return (
    <section className={style.container}>
      {characters.map(
        ({
          id,
          name,
          status,
          species,
          gender,
          origin: { name: planet },
          image,
        }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              planet={planet}
              image={image}
              onClose={() => window.alert("Emulamos que se cierra la card")}
            />
          );
        }
      )}
    </section>
  );
}

export {Cards}
