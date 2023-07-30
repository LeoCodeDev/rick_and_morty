const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { data } = await axios(`${URL}/${id}`);
    const {
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

    const episode = await Promise.all(episodesPromises);

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

    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharById;
