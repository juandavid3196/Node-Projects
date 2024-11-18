const PDFDocument = require("pdfkit");
const fs = require("fs");

function generatePdf(data, res) {
  const doc = new PDFDocument();
  const fileName = `Reporte_${Date.now()}.pdf`;

  // Configuración para la respuesta del cliente
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

  // Escribir contenido del PDF
  doc.pipe(res); // Escribir el PDF directamente en la respuesta
  doc.fontSize(20).text("Reporte Dinámico", { align: "center" });
  doc.moveDown();
  doc.fontSize(12).text(`Fecha de generación: ${new Date().toLocaleString()}`);
  doc.moveDown();

  data.forEach((item, index) => {
    doc.text(`${index + 1}. ${item.title} - ${item.description}`);
  });

  // Finalizar el PDF
  doc.end();
}

module.exports = generatePdf;
