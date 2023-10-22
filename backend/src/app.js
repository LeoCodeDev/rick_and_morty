const express = require('express');
const router = require("./routes");
const morgan = require("morgan");
const cors = require('cors');
const server = express()
const origin = process.env.BASE_URL || `http://localhost:3000`

server.use(morgan("dev"));

server.use(cors({origin: origin}))

server.use(express.json())

server.use('/rickandmorty', router)

module.exports = server