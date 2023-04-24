const express = require("express");
const router = express.Router();

// Import middleware
const { verifyToken } = require("../middleware/verifyToken.js");

const createOrder = require("../controllers/OrderController/create-order");
const getOrder = require("../controllers/OrderController/get-order");
const getOrderedList = require("../controllers/OrderController/get-ordered-list");
const getOrderReceived = require("../controllers/OrderController/get-order-received");
const updateOrder = require("../controllers/OrderController/update-order");
const deleteOrder = require("../controllers/OrderController/delete-order");

router.post("/", createOrder);
router.patch("/", verifyToken, updateOrder);
router.get("/", verifyToken, getOrder);
router.get("/ordered", verifyToken, getOrderedList);
router.get("/received", verifyToken, getOrderReceived);
router.delete("/", verifyToken, deleteOrder);

module.exports = router;
