const express = require("express");
const { sequelize } = require("./models");
const userRoutes = require("./routes/users");

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);

// Sincronizar la base de datos y arrancar el servidor
const PORT = 5000;
sequelize.sync({ force: false }).then(() => {
  console.log("Base de datos sincronizada");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
