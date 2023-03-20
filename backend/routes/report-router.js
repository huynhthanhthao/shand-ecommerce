const express = require("express");
const router = express.Router();

const createOrder = require("../controllers/OrderController/create-order");
const updateOrder = require("../controllers/OrderController/update-order");

router.post("/", createOrder);
router.patch("/", updateOrder);

module.exports = router;
