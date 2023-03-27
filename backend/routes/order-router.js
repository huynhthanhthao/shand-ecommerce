const express = require("express");
const router = express.Router();

const createOrder = require("../controllers/OrderController/create-order");
const getOrder = require("../controllers/OrderController/get-order");
const getOrderedList = require("../controllers/OrderController/get-ordered-list");
const getOrderReceived = require("../controllers/OrderController/get-order-received");
const updateOrder = require("../controllers/OrderController/update-order");
const deleteOrder = require("../controllers/OrderController/delete-order");

router.post("/", createOrder);
router.patch("/", updateOrder);
router.get("/", getOrder);
router.get("/ordered", getOrderedList);
router.get("/received", getOrderReceived);
router.delete("/", deleteOrder);

module.exports = router;
