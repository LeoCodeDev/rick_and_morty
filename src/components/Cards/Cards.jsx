import {Card} from "../Card/Card";
import style from "./Cards.module.css";

function Cards(props) {
  const { characters, onClose } = props;
  return (
    <section className={style.container}>
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
            />
          );
        }
      )}
    </section>
  );
}

export {Cards}
