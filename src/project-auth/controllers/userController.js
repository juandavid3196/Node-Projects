const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const newUser = await User.create({ username, password, role });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error al registrar usuario", error: err });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
      return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      "secret",
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error al iniciar sesión", error: err });
  }
};

const protectedRoute = (req, res) => {
  res.json({
    message: `Hola, ${req.user.username}. Esta es una ruta protegida.`,
  });
};

module.exports = { register, login, protectedRoute };
