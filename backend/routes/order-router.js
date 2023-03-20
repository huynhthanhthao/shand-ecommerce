const express = require("express");
const router = express.Router();

const createOrder = require("../controllers/OrderController/create-order");
const getOrder = require("../controllers/OrderController/get-order");
const getOrderList = require("../controllers/OrderController/get-order-list");
const updateOrder = require("../controllers/OrderController/update-order");

router.post("/", createOrder);
router.patch("/", updateOrder);
router.get("/", getOrder);
router.get("/list", getOrderList);

module.exports = router;
