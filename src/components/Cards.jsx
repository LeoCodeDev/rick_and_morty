import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <>
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
    </>
  );
}
