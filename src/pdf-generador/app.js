const express = require("express");
const bodyParser = require("body-parser");
const reportRoutes = require("./routes/reports");

const app = express();
app.use(bodyParser.json());

app.use("/api/reports", reportRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
