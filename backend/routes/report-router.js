const express = require("express");
const router = express.Router();

const createReport = require("../controllers/ReportController/create-report");
const deleteReport = require("../controllers/ReportController/delete-report");
const getDetailReport = require("../controllers/ReportController/get-report-detail");
const getReportList = require("../controllers/ReportController/get-report-list");

router.post("/", createReport);
router.delete("/", deleteReport);
router.get("/detail", getDetailReport);
router.get("/", getReportList);

module.exports = router;
