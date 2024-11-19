const express = require("express");
const { sequelize } = require("./models");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = 5000;
sequelize.sync({ force: false }).then(() => {
  console.log("Base de datos sincronizada");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
