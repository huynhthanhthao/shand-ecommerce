const express = require("express");
const router = express.Router();

const createOrder = require("../controllers/OrderController/create-order");
const getOrder = require("../controllers/OrderController/get-order");
const updateOrder = require("../controllers/OrderController/update-order");

router.post("/", createOrder);
router.patch("/", updateOrder);
router.get("/", getOrder);

module.exports = router;
