const mongoose = require("mongoose");

// Definición del esquema de usuario
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "El correo electrónico es obligatorio"],
    unique: true,
    match: [/.+@.+\..+/, "El correo electrónico no es válido"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
    minlength: [6, "La contraseña debe tener al menos 6 caracteres"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exportar el modelo
module.exports = mongoose.model("User", userSchema);
