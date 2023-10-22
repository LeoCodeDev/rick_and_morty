const { User } = require("../db");

const login = async (req, res) => {
  const { email, password } = req.query;

  try {
    if (!email || !password) return res.status(400).send("Faltan Datos");

    const loggedUser = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!loggedUser) return res.status(404).json({ message: "User not found" });

    // const userPassword = loggedUser.dataValues.password;
    const userPassword = loggedUser.password;

    return password === userPassword
      ? res.status(200).json({ access: true })
      : res.status(401).json({ message: "Wrong Password, Unauthorized", access: false });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  login,
};
