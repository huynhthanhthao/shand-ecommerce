const express = require("express");
const router = express.Router();

// Import middleware
const { verifyToken } = require("../middleware/verifyToken.js");

const addTransaction = require("../controllers/TransactionController/add-transaction");
const getTransaction = require("../controllers/TransactionController/get-transaction");
const updateTransaction = require("../controllers/TransactionController/update-transaction");

// Account router
router.post("/", verifyToken, addTransaction);
router.get("/", verifyToken, getTransaction);
router.patch("/", verifyToken, updateTransaction);

module.exports = router;
