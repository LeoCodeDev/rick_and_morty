const axios = require("axios");

const getCharDetails = (res, origin = null, location = null) => {
  const request = [];

  if (origin && location) {
    request.push(axios(origin), axios(location));
  } else if (origin) {
    request.push(axios(origin));
  } else if (location) {
    request.push(axios(location));
  }

  axios.all(request).then((responses) => {
    let originResponse, locationResponse;

    if (responses.length === 1) {
      origin
        ? (originResponse = responses[0])
        : (locationResponse = responses[0]);
    }else if (responses.length > 1){
      [originResponse, locationResponse] = responses
    }

    const response = {}
    
    if(!location){
      response.originType = originResponse.data.type
      response.originName = originResponse.data.name
      response.originDimension = originResponse.data.dimension
      response.originResidents = originResponse.data.residents
    }else if(!origin){
      response.locationType = locationResponse.data.type
      response.locationName = locationResponse.data.name
      response.locationDimension = locationResponse.data.dimension
      response.locationResidents = locationResponse.data.residents
    }else{
      response.originType = originResponse.data.type
      response.originName = originResponse.data.name
      response.originDimension = originResponse.data.dimension
      response.originResidents = originResponse.data.residents
      response.locationType = locationResponse.data.type
      response.locationName = locationResponse.data.name
      response.locationDimension = locationResponse.data.dimension
      response.locationResidents = locationResponse.data.residents
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response))

  })
  .catch((err) => {
    console.error(err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  });


  // axios(origin)
  //   .then(({ data }) => {
  //     const { type, name, dimension, residents } = data;

  //     if (location) {
  //       return axios
  //         .get(location)
  //         .then(({ data }) => {
  //           const {
  //             type: locationType,
  //             name: locationName,
  //             dimension: locationDimension,
  //             residents: locationResidents,
  //           } = data;

  //           res.writeHead(200, { "Content-Type": "application/json" });
  //           res.end(
  //             JSON.stringify({
  //               type,
  //               name,
  //               dimension,
  //               residents,
  //               locationType,
  //               locationName,
  //               locationDimension,
  //               locationResidents,
  //             })
  //           );
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //           res.writeHead(500, { "Content-type": "application/json" });
  //           res.end(JSON.stringify({ error: "Internal Server Error" }));
  //         });
  //     }

  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(
  //       JSON.stringify({
  //         type,
  //         name,
  //         dimension,
  //         residents,
  //       })
  //     );
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.writeHead(500, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify({ error: "Internal Server Error" }));
  //   });
};

module.exports = getCharDetails;
