const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetails = require("../controllers/getCharDetails");
const { login } = require("../controllers/login");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");
const { postUser } = require("../controllers/postUser");
const { getFav } = require("../controllers/getFav");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/location", getCharDetails);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.get("/fav", getFav)
router.delete("/fav/:id", deleteFav);

module.exports = router;