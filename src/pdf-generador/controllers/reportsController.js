const generatePdf = require("../generatePdf");
const dummyData = require("../data/dummyData");

function createReport(req, res) {
  const { customData } = req.body;

  // Usar datos personalizados si están disponibles, de lo contrario usar datos de prueba
  const data = customData && customData.length > 0 ? customData : dummyData;

  // Generar el PDF
  generatePdf(data, res);
}

module.exports = { createReport };
