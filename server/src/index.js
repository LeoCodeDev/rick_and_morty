const http = require("http");
const data = require("./utils/data.js");

const PORT = 3001;

const server = http
  .createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = Number(
        req.url.split("/").find((elem) => !isNaN(parseInt(elem)))
      );
      const character = data.find((elem) => elem.id === id);
        console.log(character);
      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { "Content-Type": "test/plain" });
        res.end("Character not found");
      }
    }
  })
  .listen(PORT, "localhost");
