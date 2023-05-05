const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/verifyToken.js");
const getSalesFeeController = require("../controllers/salesFeeController/getSalesFeeController.js");
const updateSalesFeeController = require("../controllers/salesFeeController/deleteSalesFeeController.js");
const deleteSalesFeeController = require("../controllers/salesFeeController/deleteSalesFeeController.js");
const getFeeList = require("../controllers/salesFeeController/getFeeList.js");

// import controller
router.get("/", verifyToken, getSalesFeeController);
router.get("/all", verifyToken, getFeeList);
router.patch("/", verifyToken, updateSalesFeeController);
router.delete("/", verifyToken, deleteSalesFeeController);

module.exports = router;
