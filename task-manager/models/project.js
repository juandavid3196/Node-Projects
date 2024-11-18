const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre del proyecto es obligatorio"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, // Relación obligatoria con un usuario
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task", // Relación con tareas
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
