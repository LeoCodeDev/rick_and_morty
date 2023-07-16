const axios = require("axios");

const getCharDetails = (res, origin, location) => {
  axios(origin)
    .then(({ data }) => {
      const { type, name, dimension, residents } = data;

      if (origin !== location) {
        return axios(location)
          .then(({ data }) => {
            const {
              type: locationType,
              name: locationName,
              dimension: locationDimension,
              residents: locationResidents,
            } = data;

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
              JSON.stringify({
                type,
                name,
                dimension,
                residents,
                locationType,
                locationName,
                locationDimension,
                locationResidents,
              })
            );
          })
          .catch((err) => {
            console.error(err);
            res.writeHead(500, { "Content-type": "application/json" });
            res.end(JSON.stringify({ error: "Internal Server Error" }));
          });
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          type,
          name,
          dimension,
          residents,
          locationType: type,
          locationName: name,
          locationDimension: dimension,
          locationResidents: residents,
        })
      );
    })
    .catch((err) => {
      console.error(err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    });
};

module.exports = getCharDetails;
