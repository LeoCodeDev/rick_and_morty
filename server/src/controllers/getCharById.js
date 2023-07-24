const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (req, res) => {
  const id = Number(req.params.id);
  axios(`${URL}/${id}`)
    .then(({ data }) => {
      const {
        id,
        name,
        status,
        species,
        type,
        gender,
        origin,
        location,
        image,
        episode: episodes,
      } = data;

      const episodesPromises = episodes.map((ep) =>
        axios(ep).then(({ data }) => data.name)
      );
      Promise.all(episodesPromises)
        .then((episode) => {
          const character = {
            id,
            name,
            status,
            species,
            type,
            gender,
            origin: origin.name,
            originUrl: origin.url,
            location: location.name,
            locationUrl: location.url,
            image,
            episode,
          };

          return character.name ? res.status(200).json(character) : res.status(404).send('Not Found')
          
        })
        .catch((error) => {
          console.log('uno');
          res.status(500).json({error:error.message})
        });
      })
      .catch((error) => {
      console.log('dos');
      res.status(500).json({error:error.message})
    });
};

module.exports = getCharById;
