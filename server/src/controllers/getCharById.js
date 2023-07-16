const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (res, id) => {
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
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              id,
              name,
              status,
              species,
              type,
              gender,
              origin : origin.name,
              originUrl : origin.url,
              location : location.name,
              locationUrl : location.url,
              image,
              episode,
            })
          );
        })
        .catch((error) => {
          console.log(error);
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Internal Server Error" }));
        });
    })
    .catch((error) => {
      console.log(error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    });
};

module.exports = getCharById