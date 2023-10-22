const express = require('express');
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require('cors');
const server = express()
const origin = process.env.BASE_URL || `http://localhost:3000`

server.use(morgan("dev"));

server.use(cors({origin: origin}))

server.use(express.json())

server.use('/api/v1/rickandmorty', router)

module.exports = server