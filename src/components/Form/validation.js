const validation = (inputs) => {
  const { email, password } = inputs;

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const RegexPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{6,10}$/;

  const errors = {};

  if (!email) errors.email = "Email is requiere";
  else if (!regexEmail.test(email)) errors.email = "Insert a valid email";
  else if (email.length > 35) errors.email = "Email is too long";

  if (!password) errors.password = "Password is requiere";
  else if (password.length < 6 || password.length > 10)
    errors.password = "Password length must be between 6~10";
  else if (!RegexPassword.test(password))
    errors.password = "Insert a valid password";

  return errors;
};

export { validation };
