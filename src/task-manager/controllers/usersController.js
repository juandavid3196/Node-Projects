const User = require("../models/user");

// Obtener todas las usuarios
const getUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las usuarios" });
  }
};
// Crear una usuario
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: "Error al crear la usuario" });
  }
};

// Actualizar una usuario
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar la usuario" });
  }
};

// Eliminar una usuario
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "usuario eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la usuario" });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
