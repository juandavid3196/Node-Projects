const express = require("express");
const { createReport } = require("../controllers/reportsController");

const router = express.Router();

// Ruta para generar un reporte
router.post("/", createReport);

module.exports = router;
