const generatePdf = require("../generatePdf");
const dummyData = require("../data/dummyData");

function createReport(req, res) {
  const { customData } = req.body;
  const data = customData && customData.length > 0 ? customData : dummyData;
  generatePdf(data, res);
}

module.exports = { createReport };
