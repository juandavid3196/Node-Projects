const PDFDocument = require("pdfkit");
const fs = require("fs");

function generatePdf(data, res) {
  const doc = new PDFDocument();
  const fileName = `Reporte_${Date.now()}.pdf`;

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

  doc.pipe(res);
  doc.fontSize(20).text("Reporte Dinámico", { align: "center" });
  doc.moveDown();
  doc.fontSize(12).text(`Fecha de generación: ${new Date().toLocaleString()}`);
  doc.moveDown();

  data.forEach((item, index) => {
    doc.text(`${index + 1}. ${item.title} - ${item.description}`);
  });

  doc.end();
}

module.exports = generatePdf;
