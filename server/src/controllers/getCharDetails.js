const axios = require("axios");

const getCharDetails = (req,res) => {
  const origin = req.query.url1 === 'null' ? null : req.query.url1
  const location = req.query.url2 === 'null' ? null : req.query.url2

  console.log(origin);

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
    res.status(200).json(response)

  })
  .catch((err) => {
    res.status(500).json({error:err.message})
  });
};

module.exports = getCharDetails;
