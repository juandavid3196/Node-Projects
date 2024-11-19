const express = require("express");
const { createReport } = require("../controllers/reportsController");

const router = express.Router();

router.post("/", createReport);

module.exports = router;
