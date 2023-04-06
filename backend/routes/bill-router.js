const express = require("express");
const router = express.Router();

// Import middleware
const { verifyToken } = require("../middleware/verifyToken.js");

const addBill = require("../controllers/BillController/add-bill.js");
const getBillList = require("../controllers/BillController/get-bill.js");

router.get("/", verifyToken, getBillList);
router.post("/", verifyToken, addBill);

module.exports = router;
