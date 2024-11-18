const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/tasks");
const userRoutes = require("./routes/users");
const projectRoutes = require("./routes/projects");

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);

// Servidor
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);