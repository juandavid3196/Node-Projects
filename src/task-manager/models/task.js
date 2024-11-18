const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "El título de la tarea es obligatorio"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  deadline: {
    type: Date,
    required: false,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
