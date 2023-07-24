const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const authLogin = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const getCharDetails = require("../controllers/getCharDetails");

const router = Router()

router.get('/character/:id', getCharById)
router.get('/login', authLogin)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)
router.get('/location', getCharDetails)

module.exports = router