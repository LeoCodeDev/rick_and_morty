const http = require("http");
const getCharById = require("./controllers/getCharById.js");
const getCharDetails = require('./controllers/getCharDetails.js');

const PORT = 3001;

const server = http
  .createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')

    console.log(req.method);

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }
    

    if (req.url.includes("/rickandmorty/character")) {
      const id = Number(
        req.url.split("/").find((elem) => !isNaN(parseInt(elem)))
      );
      return getCharById(res,id);
    }
    if(req.method === 'POST' && req.url.includes("/rickandmorty/location")){
      let body = ''

      req.on('data', (chunk) => {
        body += chunk
      })

      req.on('end', ()=> {
        const data = JSON.parse(body)
        const {url1, url2} = data
        console.log(body);
        

        return getCharDetails(res, url1, url2)
      })

    }
  })
  .listen(PORT, "localhost");
