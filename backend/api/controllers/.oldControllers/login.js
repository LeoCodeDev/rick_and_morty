const credentials = require("../utils/users");

const authLogin = (req, res) => {
  const { email, password } = req.query;

  const access = credentials.some(
    (user) => user.email === email && user.password === password
  );

  return res.status(200).json({access})
};

module.exports = authLogin;
