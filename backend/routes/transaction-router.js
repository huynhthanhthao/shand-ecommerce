const express = require("express");
const router = express.Router();

const addTransaction = require("../controllers/TransactionController/add-transaction");
const getTransaction = require("../controllers/TransactionController/get-transaction");
const updateTransaction = require("../controllers/TransactionController/update-transaction");

// Account router
router.post("/", addTransaction);
router.get("/", getTransaction);
router.patch("/", updateTransaction);

module.exports = router;
