const express = require("express");
const router = express.Router();

// Import middleware
const { verifyToken } = require("../middleware/verifyToken.js");
const { adminRole } = require("../middleware/verifyToken.js");

const createReport = require("../controllers/ReportController/create-report");
const deleteReport = require("../controllers/ReportController/delete-report");
const getDetailReport = require("../controllers/ReportController/get-report-detail");
const getReportList = require("../controllers/ReportController/get-report-list");

router.post("/", verifyToken, createReport);
router.delete("/", verifyToken, adminRole, deleteReport);
router.get("/detail", verifyToken, adminRole, getDetailReport);
router.get("/", verifyToken, adminRole, getReportList);

module.exports = router;
