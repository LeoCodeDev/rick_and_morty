const { Favorite } = require("../db");

const postFav = async (req, res) => {
  try {
    const {
      id,
      name,
      status,
      species,
      type,
      gender,
      image,
      location,
      origin,
      episode,
    } = req.body;

    console.log(req.body);

    if (
      !id ||
      !name ||
      !status ||
      !species ||
      !gender ||
      !image ||
      !location ||
      !origin ||
      !episode
    )
      return res.status(400).json({ error: "Faltan datos" });

    await Favorite.findOrCreate({
      where: {
        id,
        name,
        status,
        species,
        type,
        gender,
        image,
        location,
        origin,
        episode,
      },
    });

    const allFavorites = await Favorite.findAll();
    return res.status(201).json(allFavorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postFav
}
