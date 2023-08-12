const { User } = require("../db");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send("Faltan Datos");

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password },
    });

    if (created){
      return res.status(201).json(user)
    }else{
      return res.status(400).send("Usuario ya existe")
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postUser,
};
