const express = require("express");
const router = express.Router();

const createOrder = require("../controllers/OrderController/create-order");
const getOrder = require("../controllers/OrderController/get-order");
const getOrderedList = require("../controllers/OrderController/get-ordered-list");
const getOrderReceived = require("../controllers/OrderController/get-order-received");
const updateOrder = require("../controllers/OrderController/update-order");

router.post("/", createOrder);
router.patch("/", updateOrder);
router.get("/", getOrder);
router.get("/ordered", getOrderedList);
router.get("/received", getOrderReceived);

module.exports = router;
