const express = require('express');
const router = require("./routes");
const morgan = require("morgan");
const cors = require('cors');
const server = express()

server.use(morgan("dev"));

server.use(cors())

server.use(express.json())

server.use('/rickandmorty', router)

module.exports = server